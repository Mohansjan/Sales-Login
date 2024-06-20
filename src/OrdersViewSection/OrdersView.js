import React from "react";
import { useState, useEffect } from 'react';
import Add3 from "../ImageSection/add_3.webp";
import "./OrdersView.css";

const OrdersViewSection = () => {

    const [customerOrders, setCustomerOrders] = useState([]);
    console.log(customerOrders);
    const fetchData = async () => {
        const apiUrl = ' https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore';
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
        <div className="container-4">
            <div className="addr-1">
                <div className="aod-1">
                    <div className="ovj-1">
                        <h2 className="ovjh-1">Your Orders</h2>
                    </div>
                   
                    <div className="aod-2">
                    <div className="ovj-2">
                        <img className="ovji" src={Add3} />
                    </div>
                        <div className="ovj-3">
                           
                                <div className="ovjs-1">
                                    {customerOrders.map((order, index) => (
                                        <h6 className="ovjs-2" key={index}>
                                            <h6 className="ovjs-3">{order.Product_Name}</h6>
                                            <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                            <h6 className="ovjs-5">{order.Product_Price}</h6>
                                            <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                            
                                          
                                        </h6>
                                    ))}
                              </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersViewSection;