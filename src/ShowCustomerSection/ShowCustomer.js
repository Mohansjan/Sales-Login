import React, { useEffect, useState } from 'react';
import './ShowCustomer.css';

const ShowCustomerSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    console.log(customerOrders);
    const fetchData = async () => {
        const apiUrl = 'https://dev-mohansjan.gateway.apiplatform.io/v1/CustomerOrder';
        try {
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
            //console.log(customerOrders);
            // alert('hi')
            setCustomerOrders(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div>
            <h2 className='CO-1'>Customer Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Pin_code</th>
                        <th>Phone_number</th>
                    </tr>
                </thead>
                <tbody>
                    {customerOrders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.Name}</td>
                            <td>{order.Email}</td>
                            <td>{order.Address}</td>
                            <td>{order.Pin_Code}</td>
                            <td>{order.Phone_Number}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowCustomerSection;

