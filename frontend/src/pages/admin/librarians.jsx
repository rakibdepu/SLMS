import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import "./AdminDashboard.css";

const LibrariansManagement = () => {
  const [lib, setLib] = useState([]);

  async function getUsers() {
    try {
      const url = Server_URL + "users";
      const result = await axios.get(url);
      const { error, message } = result.data;
      if (error) {
        alert(message);
      } else {
        const { user } = result.data;
        const librarians = user.filter((u) => u.role === "librarian");
        setLib(librarians);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="admin-section-title">📚 Librarians Management</h2>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {lib.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LibrariansManagement;
