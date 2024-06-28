import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./login.css";
import HeaderSection from "../HeaderSection/header";
import SliderSection from "../SliderSection/slider";
import SpinnerSection from "../FlashSpinnerSection/spinner";
import CategorySection from "../CategorySection/category";
import BumberSection from "../BumberSection/bumber";
import TopSellerSection from "../TopSellerSection/topSeller";
import AllProSection from "../AllProSection/allPro";
import AddsSection from "../AddsSection/adds";
import FooterSection from "../FooterSection/footer";
import axios from 'axios';
import { Router } from "react-router-dom";
//import React, { useState } from 'react';


const LoginSection = () => {
  const [formData, setFormData] = useState({
    UserName: '',
    Email:'',
    Password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);


    
    try {
      const formDataCopy = { ...formData };
       formDataCopy.Password = parseInt(formDataCopy.Password);
      
      const response = await axios.post('https://dev-mohansjan.gateway.apiplatform.io/v1/login', JSON.stringify(formDataCopy), {
        headers: {
          'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
          'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
          'Content-Type': 'application/json'
        }
      });
      console.log('Login successful:', response.data);
      alert('login successful');
      window.location.href = '/OrdersView';

      // Redirect to dashboard or another page on successful login


    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError('Invalid username or password, Please try again.');
      alert('login failed')
    }
    setLoading(false);
  };

  return (
    <div className="lg-0">
    <div className="lg-1">
      <h2 className="login-1">create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="lg-2">
         
          <input
            type="text"
            name="UserName"
            placeholder="Enter UserName"
            value={formData.UserName}
            onChange={handleChange}
          />
        </div>

        <div className="lg-3">
         
          <input
            type="Email"
            name="Email"
            placeholder="Enter Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div className="lg-3">
          
          <input
            className="in-1"
            type="password"
            name="Password"
            placeholder="Enter Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className="bt-1">
        <a href="/Order"><button className="bt-2"type="submit" disabled={loading}>Submit</button></a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginSection;

