import React from "react";
import Slider1 from "../ImageSection/Slider_1.webp";
import "./Order.css";
import { SiConvertio } from "react-icons/si";
import { RiCaravanFill } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { RiCaravanLine } from "react-icons/ri";
import Add3 from "../ImageSection/add_3.webp";
import { useState,useEffect } from "react";

    const OrderSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    console.log(customerOrders);
    const fetchData = async () => {
        const apiUrl = ' https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStore/1';
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
                <div class="col-lg-4 col-xl-4 col-mg-6 col-sm-12 col-xs-12 ">
                    <div className="order-sec">
                    <img className="OrdImage-1" src={Add3} />
                    <div className="offer">
                        <div className="offerOff-1">
                           <a href="/Cart"> <p className="off-1">Add To Cart</p></a>
                        </div>
                        <div className="offerOff-2">
                            <a href="/CustomerOrder"><p className="off-2">Buy Now</p></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-8 col-xl-8 col-md-6 col-sm-12 col-xs-12">
                    <section className="dtc-1">
                        <div className="dt">
                            <p className="dt-1">boAt Airdopes 125 TWS Earbuds with 50 hrs Playtime,Quad Mics with ENxᵀᴹ Tech,ASAPᵀᴹ Charging,IWPᵀᴹ Tech,
                                BEASTᵀᴹ Mode with 50 ms Low Latency,BTv5.3, IPX5(Mystic Black)</p>
                            <a href="/shop">  <p className="dt-2">Visit The Boat Store</p></a>
                            <p className="dt-3">5K+ bought in past month</p>
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
                            <p className="dd-5">EMI starts at ₹100 per month</p>
                            <a href="ShowCustomer"><button type="text"className="swc">View Customer</button></a>
                            <hr className="dpdd"></hr>
                        </div>
                    </section>
                </div>

            </div>
            <div className="row OrderRow-2">
                <div className="col-lg-2 col-md-2 col-xs-12 col-sm-2 col-lg-2">
                    <div className="dds-1">
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
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                    <div className="dds-2">

                        <p className="Prds-1">Product Details</p>
                        <div className="ddsp-1">
                            <p className="prds-2">Brand</p>
                            <p className="prds-3">BOAT</p>
                        </div>

                        <div className="ddsp-2">
                            <p className="prds-4">Model Name</p>
                            <p className="prds-5">Airdopes 207</p>
                        </div>

                        <div className="ddsp-3">
                            <p className="prds-6">Item Weight</p>
                            <p className="prds-7">45g</p>
                        </div>

                        <div className="ddsp-4">
                            <p className="prds-8">Control Method</p>
                            <p className="prds-9">Voice</p>
                        </div>

                        <div className="ddsp-5">
                            <p className="prds-10">Material</p>
                            <p className="prds-11">Plastic</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderSection;