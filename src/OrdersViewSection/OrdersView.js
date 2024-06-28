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

const OrdersViewSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);

    useEffect(() => {
        const fetchData = debounce(async () => {
            try {
                const promises = [1, 2, 3, 4, 5, 6,7].map(async (id) => {
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
        }, 1000); // Debounce for 1 second (1000ms)

        fetchData(); // Initial call to fetchData

        return () => {
            fetchData.cancel(); // Cancel the debounce on component unmount
        };
    }, []);

    return (
        <div className="container-4">
            <div className="addr-1">
                <div className="aod-1">
                    <div className="ovj-1">
                        <h2 className="ovjh-1">Your Orders</h2>
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
                                    {index === 6 && <img className="ovji" src={Slider7} alt="Slider6" />}
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
