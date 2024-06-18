import React, { useState } from 'react';
import axios from 'axios';
import './Customer.css'; // Import CSS file


const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    c_id: ''
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
       formDataCopy.c_id = parseInt(formDataCopy.c_id);
      
      const response = await axios.post('https://dev-mohansjan.gateway.apiplatform.io/v1/customer', JSON.stringify(formDataCopy), {
        headers: {
          'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
          'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
          'Content-Type': 'application/json'
        }
      });
      console.log('Customer created:', response.data);
      alert('customer created');
      
    } catch (error) {
      console.error('Error creating customer:', error.response.data);
      setError('Failed to add customer. Please try again.');
      alert('invalid')
    }
    setLoading(false);
  };
/*const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    c_id: ''
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
      const response = await axios.post(
        'https://dev-mohansjan.gateway.apiplatform.io/v1/customer',
        formData
      );
      console.log('Customer created:', response.data);
      
    } catch (error) {
      console.error('Error creating customer:', error.response.data);
      setError('Failed to add customer. Please try again.');
    }
    setLoading(false);
  };*/

  return (
    <div className="container-1">
      <div className='header-1'>
      <h2 className='ac-1'>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Customer ID:</label>
          <input
            type="text"
            name="c_id"
            value={formData.c_id}
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

export default AddCustomer;
