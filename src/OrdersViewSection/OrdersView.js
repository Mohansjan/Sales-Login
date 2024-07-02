import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import Add3 from '../ImageSection/add_3.webp';
import Add2 from '../ImageSection/add_2.webp';
import Add5 from '../ImageSection/add_5.webp';
import Slider2 from '../ImageSection/Slider_2.webp';
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider6 from "../ImageSection/Slider_6.webp";
import Slider7 from "../ImageSection/Slider_7.webp";
import './OrdersView.css';
import { API_URL } from "../api.js";

const OrdersViewSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchText, setSearchText] = useState('');
    const [Product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(() => {
        const fetchData = debounce(async () => {
            try {
                const promises = [1, 2, 3, 4, 5, 6, 7].map(async (id) => {
                    const response = await fetch(`https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/${id}`, {
                        method: 'GET',
                        headers: {
                            'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                            'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to fetch data for id ${id}`);
                    }

                    return response.json();
                });

                const results = await Promise.all(promises);
                setCustomerOrders(results);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 1000);

        fetchData();

        return () => {
            fetchData.cancel();
        };
    }, []);

    const getRestaurants = async () => {
        const data = await fetch(API_URL)
        const jsonData = await data.json();
        setProduct(jsonData?.data?.Product_Name);
        setFilteredProduct(jsonData?.data?.Product_Name);
    }

    const handleSearch = () => {
        // Check if customerOrders is not initialized or empty
        if (!customerOrders || customerOrders.length === 0) {
            return;
        }
    
        // Flatten customerOrders array of arrays into a single array of orders
        const allOrders = customerOrders.flatMap(order => order.orders);
    
        // Filter orders based on searchTerm
        const filteredOrders = allOrders.filter(order => order.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()));
    
        // Group filtered orders back into customerOrders structure
        const groupedOrders = customerOrders.map(order => ({
            ...order,
            orders: order.orders.filter(data => filteredOrders.includes(data))
        }));
    
        setCustomerOrders(groupedOrders);
    };
    
        // setCustomerOrders(filteredOrders);
        // console.log(filteredOrders);
    


    return (
        <div className="container-4">
            <div className="addr-1">
                <div className="aod-1">
                    <div className="ovj-1">
                        <h2 className="ovjh-1">Your Orders</h2>
                    </div>

                    <div className='ibtn-1'>
                        <input
                            type='text'
                            name='ibt'
                            placeholder='Search Product'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="ibt-1" onClick={handleSearch}>Search</button>
                    </div>

                    {customerOrders.map((orders, index) => (
                        orders.length > 0 && (
                            <div className={`aod-${index + 2}`} key={index}>
                                <div className="ovj-4">
                                    {index === 0 && <img className="ovji" src={Add3} alt="Add3" />}
                                    {index === 1 && <img className="ovji" src={Slider2} alt="Slider2" />}
                                    {index === 2 && <img className="ovji" src={Slider3} alt="Slider3" />}
                                    {index === 3 && <img className="ovji" src={Add2} alt="Add2" />}
                                    {index === 4 && <img className="ovji" src={Add5} alt="Add5" />}
                                    {index === 5 && <img className="ovji" src={Slider6} alt="Slider6" />}
                                    {index === 6 && <img className="ovji" src={Slider7} alt="Slider7" />}
                                </div>
                                <div className="ovj-3">
                                    <div className="ovjs-7">
                                        {orders.map((order, idx) => (
                                            <div className="ovjs-8" key={idx}>
                                                <h6 className="ovjs-3">{order.Product_Name}</h6>
                                                <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                                <h6 className="ovjs-5">{order.Product_Price}</h6>
                                                <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrdersViewSection;
