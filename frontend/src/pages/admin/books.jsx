import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import "./AdminDashboard.css";

const BooksInventory = () => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const url = Server_URL + "books";
      const result = await axios.get(url);
      const { error, message } = result.data;
      if (error) {
        alert(message);
      } else {
        const { books } = result.data;
        setBooks(books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <h2 className="admin-section-title">📖 Books Inventory</h2>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Total Copies</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {books.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.category}</td>
                <td>{data.totalCopies}</td>
                <td>{data.availableCopies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksInventory;
