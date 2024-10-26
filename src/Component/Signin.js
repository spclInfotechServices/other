import React, { useState } from 'react';
import '../ALLCSS/Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
      <h1 className="title">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Your Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
          <label>Enter Your Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Enter Your M.No.:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
        </div>
        <div>
          <label>Enter Your Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required/>
        </div>
        <div>
          <label>Create Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
