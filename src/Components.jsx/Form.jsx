import React, { useState } from 'react';
import '../styles.css';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add more logic here, like sending data to an API
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Contact Us</h2>
      
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </label>

      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </label>

      <label>
        Message:
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
