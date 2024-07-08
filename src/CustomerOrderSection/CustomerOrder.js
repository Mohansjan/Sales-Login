import React, { useState } from "react";
import axios from 'axios';
import "./CustomerOrder.css";

const CustomerOrderSection = () => {
    const [formData, setFormData] = useState({
        Product_Name: 'boAt Airdopes 125 TWS Earbuds',  
        Product_Price: '₹1299',  
        Product_category: 'AirDopes',  
        Cus_Name: '',
        Cus_Address:'',
        Cus_PNumber:'',
        Delivery_date:''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formDataCopy = { ...formData };
            let url = 'https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd';

            const response = await axios.post(url, formDataCopy, {
                headers: {
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Order created:', response.data);
            alert('Product Ordered');
            window.location.href = '/ShowCustomer';

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
        <div className="application-1">
            <div className="cds-1">
                <div className="container-1">
                    <div className="row">
                        <div className="col">
                            <div className='header-1'>
                                <h2 className='ac-1'>Product Order</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-groupData">
                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input
                                            type="text"
                                            name="Product_Name"
                                            value={formData.Product_Name}  
                                            onChange={handleChange}
                                            readOnly  
                                        />

                                        <label>Product Price:</label>
                                        <input
                                            type="text"
                                            name="Product_Price"
                                            value={formData.Product_Price} 
                                            onChange={handleChange}
                                            readOnly  
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Product category:</label>
                                        <input
                                            type="text"
                                            name="Product_category"
                                            value={formData.Product_category}  
                                            onChange={handleChange}
                                            readOnly  
                                        />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Customer Name:</label>
                                        <input
                                            type="text"
                                            name="Cus_Name"
                                            placeholder="Enter Customer Name"
                                            value={formData.Cus_Name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Customer Address:</label>
                                        <input
                                            type="text"
                                            name="Cus_Address"
                                            placeholder="Enter Customer Address"
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
                                        <label>Delivery date:</label>
                                        <input
                                            type="date"
                                            name="Delivery_date"
                                            placeholder="Pick Delivery Date"
                                            value={formData.Delivery_date}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {error && <div className="error-message">{error}</div>}

                                    <button className="submit-button-1" type="submit" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
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
