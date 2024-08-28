import React from "react";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider6 from "../ImageSection/Slider_6.webp";
import Add2 from "../ImageSection/add_2.webp";
import Add3 from "../ImageSection/add_3.webp";
import Add4 from "../ImageSection/add_4.webp";
import Add5 from "../ImageSection/add_5.webp";
import "./Cart.css";
import { useState } from "react";

const CartSection = () => {
  const [cartItems1, setCartItems1] = useState([
    {
      id: 1,
      image: Add3,
      title: "boAt Airdopes 125 TWS Earbuds",
      discount: "-73%",
      price: "₹1,299",
    },]);

    const [cartItems2,setCartItems2] = useState([

    {
      id: 2,
      image: Slider2,
      title: "IKALL S3 Pro Smartphone",
      discount: "-58%",
      price: "₹10,999",
    },]);

    const[cartItems3,setCartItems3] = useState([
    {
      id: 3,
      image: Slider3,
      title: "IBall Bluetooth Portable Speaker",
      discount: "-69%",
      price: "₹2,999",
    },]);

    const[cartItems4,setCartItems4] = useState([
    {
      id: 4,
      image: Add2,
      title: "Kratos SW18 Smart Watch",
      discount: "-74%",
      price: "₹1,799",
    },]);

    const[cartItems5,setCartItems5] = useState([
    {
      id: 5,
      image: Slider6,
      title: "M1 Robot Vacuum Cleaner",
      discount: "-44%",
      price: "₹14,999",
    },]);

    const[cartItems6,setCartItems6] = useState([
    {
      id: 6,
      image: Add5,
      title: "Portronics SoundDrum 10W",
      discount: "-47%",
      price: "₹1,599",
    },
  ]);

  const [cartItems7,setCartItems7] = useState([
    {
    id:7,
    image: Add4,
    title: "Samsung Galaxy Buds2 Pro",
    discount: "-46%",
    price:"₹1,899",
    }
  ])

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems1.filter((item) => item.id !== id);
    setCartItems1(updatedCartItems);
  };

  const handleRemoveItem2 = (id) => {
    const updatedCartItems = cartItems2.filter((item) => item.id !== id);
    setCartItems2(updatedCartItems);
  };

  const handleRemoveItem3 = (id) => {
    const updatedCartItems = cartItems3.filter((item) => item.id !== id);
    setCartItems3(updatedCartItems);
  };

  const handleRemoveItem4 = (id) => {
    const updatedCartItems = cartItems4.filter((item) => item.id !== id);
    setCartItems4(updatedCartItems);
  };

  const handleRemoveItem5 = (id) => {
    const updatedCartItems = cartItems5.filter((item) => item.id !== id);
    setCartItems5(updatedCartItems);
  };
  const handleRemoveItem6 = (id) => {
    const updatedCartItems = cartItems6.filter((item) => item.id !== id);
    setCartItems6(updatedCartItems);
  };

  const handleRemoveItem7 = (id) =>{
    const updatedCartItems = cartItems7.filter((item) => item.id !==id);
    setCartItems7(updatedCartItems);
  } 

  return (

    <div className="Shopping">
      <div className="add-to-cart">
        <div className="atc-1">
        <h6 className="tit-1">Cart Collections</h6>
        </div>
        {cartItems1.map(item => (
        <div key={item.id} className="product">
          <img className="irc-1" id="ircd" src={item.image} alt={item.title} />
          <div className="product-details">
            <div className="dtae">
              <p className="dtcn-1">boAt Airdopes 125 TWS Earbuds</p>
              <p className="ddn-2">-73%</p>
              <p className="ddn-3">₹1,299</p>
            </div>
            <a href="Order"><button className="bn-1" id="dg">Buy Now</button></a>
            <button className="bn-2" id="dg-1" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
        <hr className="hr-1"></hr>

        {cartItems2.map(item =>(
        <div key={item.id} className="product-1">
          <img className="irc-2" id="ircd" src={Slider2} alt="Slider2" />
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">IKALL S3 Pro Smartphone</p>
                            <p className="ddn-2">-58%</p>
                            <p className="ddn-3">₹10,999</p>
                        </div>
                    
                   
           <a href="IOrder"> <button className="bn-3" id="dg">Buy Now</button></a>
            <button className="bn-4" id="dg-1" onClick={() => handleRemoveItem2(item.id)}>
              Remove</button>   
          </div>
        </div>
        ))}
        <hr className="hr-2"></hr>

        {cartItems3.map(item=>(
        <div key={item.id} className="product-2">
          <img className="irc-3" id="ircd" src={Slider3} alt="Slider3" />
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">IBall Bluetooth Portable Speaker</p>
                            <p className="ddn-2">-69%</p>
                            <p className="ddn-3">₹2,999</p>
                        </div>      
            <a href="BOrder"><button className="bn-5"id="dg">Buy Now</button></a>
            <button className="bn-6" id="dg-1" onClick={()=>handleRemoveItem3(item.id)}>
              Remove</button>
          </div>
        </div>
        ))}
         <hr className="hr-3"></hr>

         {cartItems4.map(item =>(
        <div key={item.id}className="product-3">
          <div className="image-container">
          <img className="irc-4" id="ircd" src={Add2} alt="Add2" />
          </div>
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">Kratos SW18 Smart Watch</p>
                            <p className="ddn-2">-74%</p>
                            <p className="ddn-3">₹1,799</p>
                        </div>
                    
                   
            <a href="WOrder"><button className="bn-7"id="dg">Buy Now</button></a>
            <button className="bn-8" id="dg-1" onClick={()=>handleRemoveItem4(item.id)}>Remove</button>
            
          </div>
        </div>
         ))}
        <hr className="hr-4"></hr>
        
        {cartItems5.map(item=>(
        <div key={item.id} className="product-4">
          <img className="irc-5" id="ircd" src={Slider6} alt="Slider6" />
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">M1 Robot Vacuum Cleaner</p>
                            <p className="ddn-2">-44%</p>
                            <p className="ddn-3">₹14,999</p>
                        </div>
                    
                   
            <a href="VOrder"><button className="bn-9"id="dg">Buy Now</button></a>
            <button className="bn-10" id="dg-1" onClick={()=>handleRemoveItem5(item.id)}>Remove</button>
            
          </div>
        </div>
        ))}
        <hr className="hr-5"></hr>
        
        {cartItems6.map(item=>(
        <div className="product-5">
          <img className="irc-6" id="ircd" src={Add5} alt="Add5" />
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">Portronics SoundDrum 10W</p>
                            <p className="ddn-2">-47%</p>
                            <p className="ddn-3">₹1,599</p>
                        </div>
                    
                   
            <a href="ROrder"><button className="bn-9"id="dg">Buy Now</button></a>
            <button className="bn-10" id="dg-1" onClick={()=>handleRemoveItem6(item.id)}>Remove</button> 
          </div>
        </div>
        ))}
        <hr className="hr-6"></hr>

        {cartItems7.map(item=>(
        <div key={item.id} className="product-4">
          <img className="irc-5" id="ircd" src={Add4} alt="Add4" />
          <div className="product-details">
          
                        <div className="dtae">
                            <p className="dtcn-1">Samsung Galaxy Buds2 Pro</p>
                            <p className="ddn-2">-50%</p>
                            <p className="ddn-3">₹1,899</p>
                        </div>
                    
                   
            <a href="SOrder"><button className="bn-9"id="dg">Buy Now</button></a>
            <button className="bn-10" id="dg-1" onClick={()=>handleRemoveItem7(item.id)}>
              Remove</button>
            
            

          </div>
        </div>
        ))}
        <hr className="hr-5"></hr>

      </div>
    </div>
  );
};

export default CartSection;