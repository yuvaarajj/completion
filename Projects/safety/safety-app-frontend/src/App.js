import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <select name="role" onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="user1">User1</option>
                <option value="user2">User2</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
