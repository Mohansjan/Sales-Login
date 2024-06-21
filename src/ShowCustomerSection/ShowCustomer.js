import React, { useEffect, useState } from 'react';
import './ShowCustomer.css';

const ShowCustomerSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editOrderId, setEditOrderId] = useState(null); 
    const [editFormData, setEditFormData] = useState({
        Product_Name: '',
        Product_Price: '',
        Product_category: '',
        Cus_Name: '',
        Cus_Address:'',
        Cus_PNumber:'',
        Delivary_date:''
    });

    // Function to fetch customer orders
    const fetchData = async () => {
        const apiUrl = 'https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd';
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
                Product_category: orderToEdit.Product_category,
                Cus_Name: orderToEdit.Cus_Name,
                Cus_Address: orderToEdit.Cus_Address,
                Cus_PNumber: orderToEdit.Cus_PNumber,
                Delivary_date: orderToEdit.Delivary_date,
            });
        } else {
            console.error('Order not found for editing');
        }
    };

   
    const handleSaveEdit = async () => {
        try {
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd/${editOrderId}`;
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
                throw new Error('Failed to update order');
            }
            alert('Order updated successfully');
            
            setCustomerOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === editOrderId ? { ...order, ...editFormData } : order
                )
            );
            setEditOrderId(null); 
        } catch (error) {
            console.error('Error updating order:', error);
            alert('Failed to update order. Please try again.');
        }
    };

   
    const handleCancelEdit = () => {
        setEditOrderId(null); 
    };

    
    const handleDelete = async (orderId) => {
        try {
            const apiUrl = `https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd/${orderId}`;
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
                                                <th scope="col">Customer Phone Number</th>
                                                <th scope='col'>Delivery Date</th>
                                                <th scope='col'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerOrders.map((order) => (
                                                <tr key={order.id}>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Product_Name"
                                                            value={editFormData.Product_Name}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Product_Name
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Product_Price"
                                                            value={editFormData.Product_Price}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Product_Price
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Product_category"
                                                            value={editFormData.Product_category}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Product_category
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Cus_Name"
                                                            value={editFormData.Cus_Name}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Cus_Name
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Cus_Address"
                                                            value={editFormData.Cus_Address}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Cus_Address
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="text"
                                                            name="Cus_PNumber"
                                                            value={editFormData.Cus_PNumber}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Cus_PNumber
                                                    )}</td>
                                                    <td>{editOrderId === order.id ? (
                                                        <input
                                                            type="date"
                                                            name="Delivary_date"
                                                            value={editFormData.Delivary_date}
                                                            onChange={handleEditFormChange}
                                                        />
                                                    ) : (
                                                        order.Delivary_date
                                                    )}</td>
                                                    <td>
                                                        {editOrderId === order.id ? (
                                                            <>
                                                                <button className="btn btn-success btn-sm" onClick={handleSaveEdit}>Save</button>
                                                                <button className="btn btn-secondary btn-sm ms-1" onClick={handleCancelEdit}>Cancel</button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button className="btn btn-primary btn-sm w-20%" onClick={() => handleEdit(order.id)}>Edit</button>
                                                                <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDelete(order.id)}>Delete</button>
                                                            </>
                                                        )}
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
        </section>
    );
};

export default ShowCustomerSection;
