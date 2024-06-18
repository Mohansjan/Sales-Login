import React from "react";
import axios from 'axios';
import "./CustomerOrder.css";
import { useState } from "react";

const CustomerOrderSection = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Address: '',
        Pin_Code: 0,
        Phone_Number:0
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
         formDataCopy.Pin_Code = parseInt(formDataCopy.Pin_Code);
         formDataCopy.Phone_Number = parseInt(formDataCopy.Phone_Number);
        
        const response = await axios.post(' https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerOrder', JSON.stringify(formDataCopy), {
          headers: {
            'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
            'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
            'Content-Type': 'application/json'
          }
        });
        console.log('Customer created:', response.data);
        alert('Product Ordered');
        
      } catch (error) {
        console.error('Error creating customer:', error.response.data);
        setError('Failed Order. Please try again.');
        alert('invalid')
      }
      setLoading(false);
    };
 
  
    return (
      <div className="container-1">
        <div className='header-1'>
        <h2 className='ac-1'>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pin_Code</label>
            <input
              type="text"
              name="Pin_Code"
              value={formData.Pin_Code}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone_Number</label>
            <input
              type="text"
              name="Phone_Number"
              value={formData.Phone_Number}
              onChange={handleChange}
            />
           </div>
          {error && <div className="error-message">{error}</div>}
          <button className="submit-button" type="submit" disabled={loading}>Add Customer</button>
        </form>
        </div>
      </div>
    );
  };
  
  export default CustomerOrderSection;
  