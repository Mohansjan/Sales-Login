import React from "react";
import Slider1 from "../ImageSection/Slider_1.webp";
import "./BOrder.css";
import { SiConvertio } from "react-icons/si";
import { RiCaravanFill } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { RiCaravanLine } from "react-icons/ri";
//import Add3 from "../ImageSection/add_3.webp";
//import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
const BOrderSection = () => {
    return (

        <div class="order-1">
            <div class="row orderRow-1">
                <div class="col-4">
                    <img className="OrdImage-1" src={Slider3} />
                    <div className="offer">
                        <div className="offerOff-1">
                    <p className="off-1">Add To Cart</p>
                    </div>
                    <div className="offerOff-2">
                   <a href="CustomerOrder"> <p className="off-2">Buy Now</p></a>
                    </div>
                    </div>
                </div>
                <div class="col-8">
                    <section className="dtc-1">
                        <div className="dt">
                            <p className="dt-1">IBall Sound Melon Bluetooth Portable Speaker</p>
                            <a href="/shop">  <p className="dt-2">Visit The IBALL Store</p></a>
                            <p className="dt-3">2K+ bought in past month</p>
                            <hr></hr>
                        </div>
                    </section>
                    <section className="dtc-2">
                        <div className="dd">
                            <p className="dd-1">
                                Limited time deal
                            </p>
                            <p className="dd-2">-59%</p>
                            <p className="dd-3">2,999</p>
                            <p className="dd-4">Inclusive of all taxes</p>
                            <p className="dd-5">EMI starts at ₹100 per month</p>
                            <hr className="dpdd"></hr>
                        </div>
                    </section>
                </div>

            </div>
            <div className="row OrderRow-2">
                <div className="col-2">
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
                <div className="col-10">
                    <div className="dds-2">

                        <p className="Prds-1">Product Details</p>
                        <div className="ddsp-1">
                            <p className="prds-2">Brand</p>
                            <p className="prds-3">IBALL</p>
                        </div>

                        <div className="ddsp-2">
                            <p className="prds-4">Model Name</p>
                            <p className="prds-5">SoundMelon BTH </p>
                        </div>

                        <div className="ddsp-3">
                            <p className="prds-6">Item Weight</p>
                            <p className="prds-7">300g</p>
                        </div>

                        <div className="ddsp-4">
                            <p className="prds-8">Type</p>
                            <p className="prds-9">PORTABLE WIRELESS BLUETOOTH SPEAKER</p>
                        </div>

                        <div className="ddsp-5">
                        <p className="prds-10">BLUETOOTH</p>
                        <p className="prds-11">Yes, v4.2 </p>
                    </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BOrderSection;