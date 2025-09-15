import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:5000/api/employees");
    const data = await res.json();
    setEmployees(data);
    setFiltered(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltered(
      employees.filter(
        (e) =>
          e.name.toLowerCase().includes(lower) ||
          e.department.toLowerCase().includes(lower)
      )
    );
  }, [search, employees]);

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      {/* Add Employee Form */}
      <div className="card">
        <h2>Add New Employee</h2>
        <EmployeeForm refresh={fetchEmployees} />
      </div>

      {/* Search Bar */}
      <div className="card">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or department..."
          className="search-bar"
        />
      </div>

      {/* Employee Table */}
      <div className="card">
        <EmployeeTable employees={filtered} refresh={fetchEmployees} />
      </div>
    </div>
  );
}
