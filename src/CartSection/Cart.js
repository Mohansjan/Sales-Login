import React from "react";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
import Slider5 from "../ImageSection/Slider_5.webp";
import Slider6 from "../ImageSection/Slider_6.webp";
import Add1 from "../ImageSection/Slider_2.webp";
import Add2 from "../ImageSection/add_2.webp";
import Add3 from "../ImageSection/add_3.webp";
import Add4 from "../ImageSection/add_4.webp";
import Add5 from "../ImageSection/add_5.webp";
import "./Cart.css"

const CartSection=()=>{
  return(
    
    <div className="Shopping">
         <div className="bottomHeaderSec row">
        <div className="col-10">
          <div className="MenuSec">
            <a className="linkMenu">Home</a>
            <a className="linkMenu">About</a>
            <a className="linkMenu">Blog</a>
            <a  className="linkMenu">Shop</a>
            <a href="/customer" className="linkMenu">Contact</a>
            <a className="linkMenu">Images</a>
            <a href="Return" className="linkMenu">Return</a>
            <a href="/OrdersView" className="linkMenu">Orders</a>
            <a href="/Contact" className="linkMenu">Customers</a>
            <a href="/Cart" className="linkMenu">Cart</a>
          </div>
        </div>
      </div>
      </div>
  );
};

export default CartSection;