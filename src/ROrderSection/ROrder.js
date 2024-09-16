import React from "react";
import "./ROrder.css";
import { SiConvertio } from "react-icons/si";
import { RiCaravanFill } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { RiCaravanLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import Add5 from "../ImageSection/add_5.webp";


const ROrderSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    console.log(customerOrders);
    const fetchData = async () => {
        const apiUrl = ' https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/5';
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

        <div class="order-1">
            <div class="row orderRow-1">
                <div class="col-4">
                <div className="order-sec">
                    <img className="OrdImage-1" src={Add5} alt="add2"/>
                    <div className="offer">
                        <div className="offerOff-1">
                            <a href="/Cart"><p className="off-1">Add To Cart</p></a>
                        </div>
                        <div className="offerOff-2">
                            <a href="CustomerROrder"> <p className="off-2">Buy Now</p></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-8">
                    <section className="dtc-1">
                        <div className="dt">
                            <p className="dt-1">Portronics SoundDrum 10W Portable Bluetooth Stereo Speaker with Powerful Bass, 3.5mm AUX, USB Music,
                             In-Built Mic, In-Built FM, 6-7 Hrs Playtime(Blue)</p>

                            <a href="/shop">  <p className="dt-2">Visit The Portronics Store</p></a>
                            <p className="dt-3">12K+ bought in past month</p>
                            <hr className="dpdp"></hr>
                        </div>

                    </section>
                    <section className="dtc-2">
                        <div className="dd">
                            <p className="dd-1">
                                Limited time deal
                            </p>
                            {customerOrders.map((order, index) => (
                                <p className="ovjs-2" key={index}>
                                    <p className="dd-2">{order.Product_Discount}</p>
                                    <p className="dd-3">{order.Product_Price}</p>
                                </p>
                            ))}
                            <p className="dd-4">Inclusive of all taxes</p>
                            <p className="dd-5">EMI starts at ₹78 per month</p>
                            <hr className="dpdd"></hr>
                        </div>
                    </section>
                </div>

            </div>
            <div className="row OrderRow-2">
                <div className="col-2">
                    <div className="ddds-1">
                        <SiConvertio />
                        <p className="iic-1">7 Days Replacement</p>
                        <RiCaravanFill />
                        <p className="iic-2">Free Delivary</p>
                        <MdOutlineContactPhone />
                        <p className="iic-3">1 Year Warrenty</p>
                        <GiTakeMyMoney />
                        <p className="iic-4">Pay On Delivary</p>
                        <GrStatusGood />
                        <p className="iic-5"> Top Brand</p>
                        <RiCaravanLine />
                        <p className="iic-6">Yuva Store Delivered</p>

                    </div>
                </div>
                <div className="col-10">
                    <div className="dds-2">

                        <p className="Prds-1">Product Details</p>
                        <div className="ddsp-1">
                            <p className="prds-21">Brand</p>
                            <p className="prds-31">Portronics</p>
                        </div>

                        <div className="ddsp-2">
                            <p className="prds-41">Weight</p>
                            <p className="prds-51">331 grams</p>
                        </div>

                        <div className="ddsp-3">
                            <p className="prds-61">Audio</p>
                            <p className="prds-71">Stereo</p>
                        </div>

                        <div className="ddsp-4">
                            <p className="prds-81">connectivity</p>
                            <p className="prds-91">Bluetooth, Auxiliary, USB</p>
                        </div>

                        <div className="ddsp-5">
                            <p className="prds-101">Battery</p>
                            <p className="prds-111">1800mAh </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ROrderSection;