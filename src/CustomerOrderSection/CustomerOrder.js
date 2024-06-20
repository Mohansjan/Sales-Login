import React from "react";
import axios, { formToJSON } from 'axios';
import "./CustomerOrder.css";
import { useState } from "react";
import Add3 from "../ImageSection/add_3.webp";

const CustomerOrderSection = () => {
    const [formData, setFormData] = useState({
      Product_Name: '',
      Product_Price: '',
      Product_category: '',
      Cus_Name: '',
      Cus_Address:'',
      Cus_PNumber:'',
      Delivary_date:''
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
         //formDataCopy.Pin_Code = parseInt(formDataCopy.Pin_Code);
        //  formDataCopy.Phone_Number = parseInt(formDataCopy.Phone_Number);
        
        const response = await axios.post('https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd', formDataCopy, {

          headers: {
            'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
            'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
            'Content-Type': 'application/json'
          }
        });
        console.log('Customer created:', response.data);
        alert('Product Ordered');
        window.location.href = '/ShowCustomer';
        
      } catch (error) {
        console.error('Error creating customer:', error.response.data);
        setError('Failed Order. Please try again.');
        alert('invalid')
      }
      setLoading(false);
    };
 
  
    return (
     
      <div className="application-1">
        <div className="cds-1">
        
      <div className="container-1">
      <div class="row">
    <div class="col">
    <div className='header-1'>
        <h2 className='ac-1'>Customer Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

          <label>Product Name:</label>
            <input
              type="text"
              name="Product_Name"
              placeholder="Enter Product name"
              value={formData.Product_Name}
              onChange={handleChange}
            />

            <label>Product Price:</label>
            <input
              type="text"
              name="Product_Price"
              placeholder="Enter Product price"
              value={formData.Product_Price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Product category:</label>
            <input
              type="text"
              name="Product_category"
              placeholder="Enter Product category"
              value={formData.Product_category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Customer Name:</label>
            <input
              type="text"
              name="Cus_Name"
              placeholder="Enter Name"
              value={formData.Cus_Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Customer Address:</label>
            <input
              type="text"
              name="Cus_Address"
              placeholder="Enter Address"
              value={formData.Cus_Address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile number:</label>
            <input
              type="text"
              name="Cus_PNumber"
              placeholder="Enter Mobile Number"
              value={formData.Cus_PNumber}
              onChange={handleChange}
            />
           </div>

           <div className="form-group">
            <label>Delivary date:</label>
            <input
              type="date"
              name="Delivary_date"
              placeholder="Pick Delivery Date"
              value={formData.Delivary_date}
              onChange={handleChange}
            />
           </div>


          {error && <div className="error-message">{error}</div>}
          <a href="/ShowCustomer"><button className="submit-button" type="submit" disabled={loading}>Submit</button></a>
          
        </form>
        </div>
    </div>
    
      </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default CustomerOrderSection;
  