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
        const apiUrl = ' https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails';
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
            console.log(customerOrders)
            // alert('GSDASJHDAKSD')
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
            console.log(orderToEdit)
           // alert('HELOOOOOOOOOOOOOOO')
            setShowModal(true); 
        } else {
            console.error('Order not found for editing');
        }
    };

    const handleSaveEdit = async () => {
        try {
            const apiUrl = `  https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails/${editOrderId}`;
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
            const apiUrl = ` https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerDetails/${orderId}`;
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
                                    <h2 className='sw-10'>Customer Details</h2>
                                    <table className="table table-dark table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Customer Age</th>
                                                <th scope="col">Customer Address</th>
                                                <th scope="col">Customer Email</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Pin Code</th>
                                                <th scope='col'>Customer_district</th>
                                                <th scope='col'>Actions</th>
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
                                        <label htmlFor="Customer_Name" className="form-label">Customer_Name</label>
                                        <input type="text" className="form-control" id="Customer_Name" name="Customer_Name" value={editFormData.Customer_Name} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_Age" className="form-label">Customer_Age</label>
                                        <input type="text" className="form-control" id="Customer_Age" name="Customer_Age" value={editFormData.Customer_Age} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_Address" className="form-label">Customer Address</label>
                                        <input type="text" className="form-control" id="Customer_Address" name="Customer_Address" value={editFormData.Customer_Address} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_Email" className="form-label">Customer Email</label>
                                        <input type="text" className="form-control" id="Customer_Email" name="Customer_Email" value={editFormData.Customer_Email} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Phone_Number" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="Phone_Number" name="Phone_Number" value={editFormData.Phone_Number} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Pin_Code" className="form-label">Pin Code</label>
                                        <input type="text" className="form-control" id="Pin_Code" name="Pin_Code" value={editFormData.Pin_Code} onChange={handleEditFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Customer_district" className="form-label">Customer_district</label>
                                        <input type="date" className="form-control" id="Customer_district" name="Customer_district" value={editFormData.Customer_district} onChange={handleEditFormChange} />
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

export default CustomerAddedSection;
