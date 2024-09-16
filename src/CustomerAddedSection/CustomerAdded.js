import React, { useEffect, useState } from 'react';
import './CustomerAdded.css';

const CustomerAddedSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editOrderId, setEditOrderId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        Customer_Name: '',
        Customer_Age: '',
        Customer_Address: '',
        Customer_Email: '',
        Phone_Number: '',
        Pin_Code: '',
        Customer_district: ''
    });

    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        const apiUrl = 'https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails';
        try {
            setLoading(true);
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCustomerOrders(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (orderId) => {
        const orderToEdit = customerOrders.find(order => order.id === orderId);
        if (orderToEdit) {
            setEditOrderId(orderId);

            setEditFormData({
                Customer_Name: orderToEdit.Customer_Name,
                Customer_Age: orderToEdit.Customer_Age,
                Customer_Address: orderToEdit.Customer_Address,
                Customer_Email: orderToEdit.Customer_Email,
                Phone_Number: orderToEdit.Phone_Number,
                Pin_Code: orderToEdit.Pin_Code,
                Customer_district: orderToEdit.Customer_district,
            });
            setShowModal(true); 
        } else {
            console.error('Order not found for editing');
        }
    };

    const handleSaveEdit = async () => {
        try {
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails/${editOrderId}`;
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editFormData),
            });
            if (!response.ok) {
                throw new Error(`Failed to update order: ${response.status} - ${response.statusText}`);
            }
            alert('Order updated successfully');

            setCustomerOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === editOrderId ? { ...order, ...editFormData } : order
                )
            );
            setEditOrderId(null); 
            setShowModal(false); 
        } catch (error) {
            console.error('Error updating order:', error);
            alert('Failed to update order. Please try again.');
        }
    };

    const handleCancelEdit = () => {
        setEditOrderId(null); 
        setShowModal(false); 
    };

    const handleDelete = async (orderId) => {
        try {
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails/${orderId}`;
            const response = await fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete order');
            }
            alert('Order deleted successfully');

            setCustomerOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
            alert('Failed to delete order. Please try again.');
        }
    };

    const handleEditFormChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({
            ...editFormData,
            [name]: value,
        });
    };

    return (
        <section className="customer-intro">
            <div className="customer-gradient-custom h-100">
                <div className="customer-mask d-flex align-items-center h-100">
                    <div className="customer-container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                            <div className="customer-table-responsive">
    <h2 className="customer-heading">Customer Details</h2>
    <table className="customer-table">
        <thead className="customer-thead">
            <tr>
                <th scope="col"> Name</th>
                <th scope="col"> Age</th>
                <th scope="col"> Address</th>
                <th scope="col"> Email</th>
                <th scope="col">Ph_Number</th>
                <th scope="col">Pin Code</th>
                <th scope="col">District</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {customerOrders.map((order) => (
                <tr key={order.id}>
                    <td>{order.Customer_Name}</td>
                    <td>{order.Customer_Age}</td>
                    <td>{order.Customer_Address}</td>
                    <td>{order.Customer_Email}</td>
                    <td>{order.Phone_Number}</td>
                    <td>{order.Pin_Code}</td>
                    <td>{order.Customer_district}</td>
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => handleEdit(order.id)}>Edit</button>
                        <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDelete(order.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {showModal && (
    <div className="custom-modal-overlay">
        <div className="custom-modals">
            <div className="custom-modal-header">
                <h5 className="custom-modal-title">Edit Customer Details</h5>
                <button type="button" className="custom-close-button" onClick={handleCancelEdit}>×</button>
            </div>
            <div className="custom-modal-body">
                <form>
                    <div className="custom-form-group">
                        <label htmlFor="Customer_Name" className="custom-label">Customer Name</label>
                        <input type="text" className="custom-input" id="Customer_Name" name="Customer_Name" value={editFormData.Customer_Name} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Customer_Age" className="custom-label">Customer Age</label>
                        <input type="text" className="custom-input" id="Customer_Age" name="Customer_Age" value={editFormData.Customer_Age} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Customer_Address" className="custom-label">Customer Address</label>
                        <input type="text" className="custom-input" id="Customer_Address" name="Customer_Address" value={editFormData.Customer_Address} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Customer_Email" className="custom-label">Customer Email</label>
                        <input type="email" className="custom-input" id="Customer_Email" name="Customer_Email" value={editFormData.Customer_Email} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Phone_Number" className="custom-label">Phone Number</label>
                        <input type="tel" className="custom-input" id="Phone_Number" name="Phone_Number" value={editFormData.Phone_Number} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Pin_Code" className="custom-label">Pin Code</label>
                        <input type="text" className="custom-input" id="Pin_Code" name="Pin_Code" value={editFormData.Pin_Code} onChange={handleEditFormChange} />
                    </div>
                    <div className="custom-form-group">
                        <label htmlFor="Customer_district" className="custom-label">Customer District</label>
                        <input type="text" className="custom-input" id="Customer_district" name="Customer_district" value={editFormData.Customer_district} onChange={handleEditFormChange} />
                    </div>
                </form>
            </div>
            <div className="custom-modal-footer">
                <button type="button" className="custom-cancel-button" onClick={handleCancelEdit}>Cancel</button>
                <button type="button" className="custom-save-button" onClick={handleSaveEdit}>Save Changes</button>
            </div>
        </div>
    </div>
)}

        </section>
    );
};

export default CustomerAddedSection;
