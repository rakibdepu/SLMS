import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/admin/AdminDashboard.css";

export default function AdminSidebar() {
  const role = localStorage.getItem("role");

  return (
    <nav className="col-md-3 col-lg-2 admin-sidebar">
      {role === "admin" ? (
        <h4 className="admin-sidebar-title">📌 Admin Panel</h4>
      ) : (
        <h4 className="admin-sidebar-title">📌 Librarian Panel</h4>
      )}
      <ul className="admin-nav">
        <li className="admin-nav-item">
          <NavLink
            to="/admin/users"
            className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
            👥 Students
          </NavLink>
        </li>

        {role == "librarian" && (
          <>
            <li className="admin-nav-item">
              <NavLink
                to="/admin/issuerequest"
                className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
                📥 Issue Requests
              </NavLink>
            </li>

            <li className="admin-nav-item">
              <NavLink
                to="/admin/returnrequest"
                className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
                🔄 Return Requests
              </NavLink>
            </li>
          </>
        )}

        {role === "admin" && (
          <>
          <li className="admin-nav-item">
            <NavLink
              to="/admin/addlibrarian"
              className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
              ➕ Add Librarian
            </NavLink>
          </li>

          <li className="admin-nav-item">
            <NavLink
              to="/admin/librarians"
              className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
              📚 Librarians
            </NavLink>
          </li>
          </>
        )}

        <li className="admin-nav-item">
          <NavLink
            to="/admin/addbook"
            className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
            ➕ Add Books
          </NavLink>
        </li>

        <li className="admin-nav-item">
          <NavLink
            to="/admin/viewbook"
            className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
            🔍 Manage Books
          </NavLink>
        </li>

        <li className="admin-nav-item">
          <NavLink
            to="/admin/issued"
            className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
            📚 Books Borrowed
          </NavLink>
        </li>

        <li className="admin-nav-item">
          <NavLink
            to="/admin/books"
            className={({ isActive }) => `admin-nav-btn ${isActive ? "active" : ""}`}>
            📖 Books Inventory
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
