import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import "./adminnavbar.css"
export default function AdminNavbar(){

    const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate("/login");
  };


    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
    <div className="container">
     
      <Link className="navbar-brand fw-bold" to="/admin">
        🏛️ Smart Library Managment System
      </Link>

    
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        <ul className="navbar-nav me-auto">
        </ul>

        <ul className="navbar-nav">
          {token ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  {role === "admin" ? (
                    <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                  ) : (
                    <Link className="nav-link" to="/admin">Librarian Dashboard</Link>
                  )}
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-light me-2" to="/admin-login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
    )
}