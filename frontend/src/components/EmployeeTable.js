import React, { useState } from "react";

export default function EmployeeTable({ employees, refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    phone: ""
  });

  const startEdit = (emp) => {
    setEditingId(emp._id);
    setForm(emp);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", email: "", role: "", department: "", phone: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    await fetch(`http://localhost:5000/api/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setEditingId(null);
    refresh();
  };

  const deleteEmployee = async (id) => {
    await fetch(`http://localhost:5000/api/employees/${id}`, {
      method: "DELETE"
    });
    refresh();
  };

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp._id}>
            {editingId === emp._id ? (
              <>
                <td><input name="name" value={form.name} onChange={handleChange} /></td>
                <td><input name="email" value={form.email} onChange={handleChange} /></td>
                <td><input name="role" value={form.role} onChange={handleChange} /></td>
                <td><input name="department" value={form.department} onChange={handleChange} /></td>
                <td><input name="phone" value={form.phone} onChange={handleChange} /></td>
                <td>
                  <button onClick={() => saveEdit(emp._id)} className="btn save-btn">Save</button>
                  <button onClick={cancelEdit} className="btn cancel-btn">Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>{emp.department}</td>
                <td>{emp.phone}</td>
                <td>
                  <button onClick={() => startEdit(emp)} className="btn edit-btn">Edit</button>
                  <button onClick={() => deleteEmployee(emp._id)} className="btn delete-btn">Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
