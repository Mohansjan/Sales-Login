import React, { useState, useEffect } from 'react';
import Add3 from '../ImageSection/add_3.webp';
import Add2 from '../ImageSection/add_2.webp';
import Slider2 from '../ImageSection/Slider_2.webp';
import Slider3 from "../ImageSection/Slider_3.webp";

import './OrdersView.css';


const OrdersViewSection = () => {
    const [customerOrders1, setCustomerOrders1] = useState([]);
    const [customerOrders2, setCustomerOrders2] = useState([]);
    const [customerOrders3, setCustomerOrders3] = useState([]);
    const [customerOrders4, setCustomerOrders4] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response1 = await fetch('https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/1', {
                    method: 'GET',
                    headers: {
                        'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                        'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response1.ok) {
                    throw new Error('Network response was not ok');
                }

                const data1 = await response1.json();
                setCustomerOrders1(data1);

                //data 2
                const response2 = await fetch('https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/2', {
                    method: 'GET',
                    headers: {
                        'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                        'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response2.ok) {
                    throw new Error('Network response was not ok');
                }

                const data2 = await response2.json();
                setCustomerOrders2(data2);


                //data3
                const response3 = await fetch('https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/3', {
                    method: 'GET',
                    headers: {
                        'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                        'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response2.ok) {
                    throw new Error('Network response was not ok');
                }

                const data3 = await response3.json();
                setCustomerOrders3(data3);

                const response4 = await fetch('https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/4', {
                    method: 'GET',
                    headers: {
                        'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                        'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response2.ok) {
                    throw new Error('Network response was not ok');
                }

                const data4 = await response4.json();
                setCustomerOrders4(data4);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

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
                            <img className="ovji" src={Add3} alt="Add3" />
                        </div>
                        <div className="ovj-3">
                            <div className="ovjs-1">
                                {customerOrders1.map((order, index) => (
                                    <div className="ovjs-2" key={index}>
                                        <h6 className="ovjs-3">{order.Product_Name}</h6>
                                        <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                        <h6 className="ovjs-5">{order.Product_Price}</h6>
                                        <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="aod-3">
                        <div className="ovj-4">
                            <img className="ovji" src={Slider2} alt="Slider2" />
                        </div>
                        <div className="ovj-3">
                            <div className="ovjs-7">
                                {customerOrders2.map((order, index) => (
                                    <div className="ovjs-8" key={index}>
                                        <h6 className="ovjs-3">{order.Product_Name}</h6>
                                        <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                        <h6 className="ovjs-5">{order.Product_Price}</h6>
                                        <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className="aod-4">
                        <div className="ovj-4">
                            <img className="ovji" src={Slider3} alt="Slider3" />
                        </div>
                        <div className="ovj-3">
                            <div className="ovjs-7">
                                {customerOrders3.map((order, index) => (
                                    <div className="ovjs-8" key={index}>
                                        <h6 className="ovjs-3">{order.Product_Name}</h6>
                                        <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                        <h6 className="ovjs-5">{order.Product_Price}</h6>
                                        <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="aod-5">
                        <div className="ovj-4">
                            <img className="ovji" src={Add2} alt="Add2" />
                        </div>
                        <div className="ovj-3">
                            <div className="ovjs-7">
                                {customerOrders4.map((order, index) => (
                                    <div className="ovjs-8" key={index}>
                                        <h6 className="ovjs-3">{order.Product_Name}</h6>
                                        <h6 className="ovjs-4">{order.Product_Discount}</h6>
                                        <h6 className="ovjs-5">{order.Product_Price}</h6>
                                        <h6 className="ovjs-6">{order.EMI_Option}</h6>
                                    </div>
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
