// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Import the external CSS file

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Task Manager
        </Link>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
