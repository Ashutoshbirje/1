// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the external CSS file

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', formData);
            navigate('/'); // Redirect to home page after successful registration
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Register</h2>
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ashutosh Birje"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ashutoshbirje@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Register
                    </button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
