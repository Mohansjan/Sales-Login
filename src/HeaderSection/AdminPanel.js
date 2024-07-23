import React from "react";
import "./AdminPanel.css";

const AdminPanel = ({ isOpen, togglePanel }) => {
  return (
    <div className={`admin-panel ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={togglePanel}>Close</button>
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/reports">Reports</a></li>
      </ul>
      
    </div>
  );
};

export default AdminPanel;
