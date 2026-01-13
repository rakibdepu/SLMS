import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import "./AdminDashboard.css";

const UsersManagement = () => {
  const [user, setUser] = useState([]);

  async function getUsers() {
    try {
      const url = Server_URL + "users";
      const result = await axios.get(url);
      const { error, message } = result.data;
      if (error) {
        alert(message);
      } else {
        const { user } = result.data;
        const students = user.filter((u) => u.role === "user");
        setUser(students);
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
      <h2 className="admin-section-title">👥 Users Management</h2>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersManagement;
