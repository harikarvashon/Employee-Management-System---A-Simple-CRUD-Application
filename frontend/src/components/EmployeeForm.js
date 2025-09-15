import React, { useState } from "react";

export default function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setForm({ name: "", email: "", role: "", department: "", phone: "" });
    refresh();
  };

  return (
    <form onSubmit={addEmployee} className="employee-form">
      {["name", "email", "role", "department", "phone"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit" className="btn add-btn">Add Employee</button>
    </form>
  );
}
