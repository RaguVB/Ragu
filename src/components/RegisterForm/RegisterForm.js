import React, { useState } from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.fullName === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmPassword === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    navigate('/login');
    console.log('Registration successful!', formData);
  };

  return (
    <div className="box">
      <form className="form-box" onSubmit={handleSubmit}>
        <span className="text-center">Create an account</span>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="address"
            placeholder="Address"
          />
        </div>
            <input type="submit" value="Register" className="btn" onClick={handleChange}/>
      </form>
    </div>
  );
};

export default RegistrationForm;