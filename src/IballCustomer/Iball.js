import React, { useEffect, useState } from 'react';
import './Iball.css';

const IballCustomer = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editOrderId, setEditOrderId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        Product_Name: '',
        Product_Price: '',
        Product_Category: '',
        Customer_Name: '',
        Customer_Address: '',
        Customer_PNumber: '',
        Delivery_Date: ''
    });

    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        const apiUrl = 'https://dev-mohansjan.gateway.apiplatform.io/v1/BOrder';
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
                Product_Name: orderToEdit.Product_Name,
                Product_Price: orderToEdit.Product_Price,
                Product_Category: orderToEdit.Product_Category,
                Customer_Name: orderToEdit.Customer_Name,
                Customer_Address: orderToEdit.Customer_Address,
                Customer_PNumber: orderToEdit.Customer_PNumber,
                Delivery_Date: orderToEdit.Delivery_Date,
            });
            setShowModal(true); 
        } else {
            console.error('Order not found for editing');
        }
    };

    const handleSaveEdit = async () => {
        try {
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/BOrder/${editOrderId}`;
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
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/BOrder/${orderId}`;
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
        <section className="intro">
            <div className="gradient-custom-2 h-100">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container-12">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <h2 className='sw-1'>Customer Details</h2>
                                    <table className="table table-dark table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Product Price</th>
                                                <th scope="col">Product Category</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Customer Address</th>
                                                <th scope="col">Customer PNumber</th>
                                                <th scope='col'>Delivery Date</th>
                                                <th scope='col'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerOrders.map((order) => (
                                                <tr key={order.id}>
                                                    <td>{order.Product_Name}</td>
                                                    <td>{order.Product_Price}</td>
                                                    <td>{order.Product_Category}</td>
                                                    <td>{order.Customer_Name}</td>
                                                    <td>{order.Customer_Address}</td>
                                                    <td>{order.Customer_PNumber}</td>
                                                    <td>{order.Delivery_Date}</td>
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
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Order</h5>
                                <button type="button" className="btn-close" onClick={handleCancelEdit}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="Product_Name" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="Product_Name" name="Product_Name" value={editFormData.Product_Name} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Product_Price" className="form-label">Product Price</label>
                                        <input type="text" className="form-control" id="Product_Price" name="Product_Price" value={editFormData.Product_Price} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Product_Category" className="form-label">Product Category</label>
                                        <input type="text" className="form-control" id="Product_Category" name="Product_Category" value={editFormData.Product_Category} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_Name" className="form-label">Customer Name</label>
                                        <input type="text" className="form-control" id="Customer_Name" name="Customer_Name" value={editFormData.Customer_Name} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_Address" className="form-label">Customer Address</label>
                                        <input type="text" className="form-control" id="Customer_Address" name="Customer_Address" value={editFormData.Customer_Address} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_PNumber" className="form-label">Customer Phone Number</label>
                                        <input type="text" className="form-control" id="Customer_PNumber" name="Customer_PNumber" value={editFormData.Customer_PNumber} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Delivery_Date" className="form-label">Delivery Date</label>
                                        <input type="date" className="form-control" id="Delivery_Date" name="Delivery_Date" value={editFormData.Delivery_Date} onChange={handleEditFormChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default IballCustomer;
