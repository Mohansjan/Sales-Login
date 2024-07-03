import React, { useState } from "react";
import axios from 'axios';
import "./Contact.css";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        Customer_Name: '',
        Customer_Age: '',
        Customer_Address: '',
        Customer_Email: '',
        Phone_Number: '',
        Pin_Code: '',
        Customer_district: '',
      
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formDataCopy = { ...formData };
            let url = 'https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails';

            const response = await axios.post(url, formDataCopy, {
                headers: {
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Customer Added:', response.data);
            alert('Customer Added');
            window.location.href = '/CustomerAdded';


        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError('Failed Order. Please try again.');
        }
        setLoading(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className='form-header'>Customer Details</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            name="Customer_Name"
                            placeholder="Enter Customer Name"
                            value={formData.Customer_Name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Age</label>
                        <input
                            type="text"
                            name="Customer_Age"
                            placeholder="Enter Customer Age"
                            value={formData.Customer_Age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Address</label>
                        <input
                            type="text"
                            name="Customer_Address"
                            placeholder="Enter Customer Address"
                            value={formData.Customer_Address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Email</label>
                        <input
                            type="text"
                            name="Customer_Email"
                            placeholder="Enter Customer Email"
                            value={formData.Customer_Email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="Phone_Number"
                            placeholder="Enter Phone Number"
                            value={formData.Phone_Number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pin Code</label>
                        <input
                            type="text"
                            name="Pin_Code"
                            placeholder="Enter Pin Code"
                            value={formData.Pin_Code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer District</label>
                        <input
                            type="text"
                            name="Customer_district"
                            placeholder="Enter Customer District"
                            value={formData.Customer_district}
                            onChange={handleChange}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button className="submit-button" type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
