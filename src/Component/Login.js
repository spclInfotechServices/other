import React, { useState } from 'react';
import '../ALLCSS/Login.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="container">
      <h1 className="title">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
          <label>Enter Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Enter Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Signin;
