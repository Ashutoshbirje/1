import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Login from './Component/Login/Login';
import Register from './Component/SignUp/Register';
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        // Optional: If there's a token, you might want to set it in localStorage
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]);

    return (
        <Router>
            <NavBar token={token} setToken={setToken} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile/>} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
