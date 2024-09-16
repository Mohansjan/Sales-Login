import React, { useState } from "react";
import axios from 'axios';
import "./CustomerOrder.css";
import { useNavigate } from "react-router-dom";

const CustomerOrderSection = () => {
    const [formData, setFormData] = useState({
        Product_Name: 'boAt Airdopes 125 TWS Earbuds',
        Product_Price: '1299',  
        Product_category: 'AirDopes',
        Cus_Name: '',
        Cus_Address: '',
        Cus_PNumber: '',
        Delivery_date: '',
        Quantity: 1,  
        Total_Price: 1299
    });

    const [errors, setErrors] = useState({
        Cus_Name: '',
        Cus_Address: '',
        Cus_PNumber: '',
        Delivery_date: '',
        general: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

    
        if (!formData.Cus_Name) {
            newErrors.Cus_Name = 'Customer Name is required.';
            isValid = false;
        }
        if (!formData.Cus_Address) {
            newErrors.Cus_Address = 'Customer Address is required.';
            isValid = false;
        }
        if (!formData.Cus_PNumber) {
            newErrors.Cus_PNumber = 'Mobile Number is required.';
            isValid = false;
        }
        if (!formData.Delivery_date) {
            newErrors.Delivery_date = 'Delivery Date is required.';
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
        }

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const url = 'https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd';

            const response = await axios.post(url, formData, {
                headers: {
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Order created:', response.data);
            alert('Product Ordered');
            navigate('/OrdersView');

        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setErrors(prevErrors => ({ ...prevErrors, general: 'Failed to place order. Please try again.' }));
        }
        setLoading(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleFocus = (event) => {
        const { name } = event.target;
    
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleIncreaseQuantity = () => {
        setFormData(prevData => {
            const newQuantity = prevData.Quantity + 1;
            const newTotalPrice = prevData.Product_Price * newQuantity;
            return { ...prevData, Quantity: newQuantity, Total_Price: newTotalPrice };
        });
    };

    const handleDecreaseQuantity = () => {
        if (formData.Quantity > 1) {
            setFormData(prevData => {
                const newQuantity = prevData.Quantity - 1;
                const newTotalPrice = prevData.Product_Price * newQuantity;
                return { ...prevData, Quantity: newQuantity, Total_Price: newTotalPrice };
            });
        }
    };

    return (
        <div className="application-1">
            <div className="cds-1">
                <div className="container-1">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-sm-12 col-xs-12">
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
                                                value={`₹${formData.Product_Price}`}
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
                                            onFocus={handleFocus}
                                        />
                                        {errors.Cus_Name && <div className="error-message">{errors.Cus_Name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label>Customer Address:</label>
                                        <input
                                            type="text"
                                            name="Cus_Address"
                                            placeholder="Enter Customer Address"
                                            value={formData.Cus_Address}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                        />
                                        {errors.Cus_Address && <div className="error-message">{errors.Cus_Address}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Mobile number:</label>
                                        <input
                                            type="text"
                                            name="Cus_PNumber"
                                            placeholder="Enter Mobile Number"
                                            value={formData.Cus_PNumber}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                        />
                                        {errors.Cus_PNumber && <div className="error-message">{errors.Cus_PNumber}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Delivery date:</label>
                                        <input
                                            type="date"
                                            name="Delivery_date"
                                            placeholder="Pick Delivery Date"
                                            value={formData.Delivery_date}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                        />
                                        {errors.Delivery_date && <div className="error-message">{errors.Delivery_date}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label>Quantity:</label>
                                        <div className="quantity-control">
                                            <button type="button" className="btn-sub" onClick={handleDecreaseQuantity}>-</button>
                                            <span className="qty">{formData.Quantity}</span>
                                            <button type="button" className="btn-add" onClick={handleIncreaseQuantity}>+</button>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Total Price:</label>
                                        <input
                                            type="text"
                                            value={`₹${formData.Total_Price}`}
                                            readOnly
                                        />
                                    </div>

                                    {errors.general && <div className="error-message">{errors.general}</div>}

                                    <button className="submit-buttons-1" type="submit" disabled={loading}>
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
