import React, { useState } from "react";
import Slider1 from "../ImageSection/Slider_1.webp";
import Slider2 from "../ImageSection/Slider_2.webp";
import Slider3 from "../ImageSection/Slider_3.webp";
import Slider4 from "../ImageSection/Slider_4.webp";
import Slider5 from "../ImageSection/Slider_5.webp";
import Slider6 from "../ImageSection/Slider_6.webp";
import Add2 from "../ImageSection/add_2.webp";
import Add3 from "../ImageSection/add_3.webp";
import Add4 from "../ImageSection/add_4.webp";
import Add5 from "../ImageSection/add_5.webp";
import "./Shop.css";

const ShoppingSection = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const allImages = [
    { src: Add3, category: "ads", href: "/Order" , carthref:"/Cart" },
    { src: Slider2, category: "slider", href: "/IOrder" ,carthref:"/Cart"},
    { src: Slider3, category: "slider", href: "/BOrder" ,carthref:"/Cart"},
    { src: Add2, category: "ads", href: "/WOrder" ,carthref:"/Cart"},
    { src: Add5, category: "ads", href: "/ROrder",carthref:"/Cart"},
    { src: Slider6, category: "slider", href: "/VOrder" ,carthref:"/Cart"},
    { src: Add4, category: "ads", href: "/SOrder" ,carthref:"/Cart"},
    { src: Slider1, category: "slider", href: "/Contact",carthref:"/Cart" },
    { src: Slider5, category: "slider", href: "/Order",carthref:"/Cart" },
    { src: Slider2, category: "slider", href: "/IOrder",carthref:"/Cart" },
    { src: Slider4, category: "slider", href: "/Order",carthref:"/Cart" },
    { src: Add3, category: "ads", href: "/Contact" ,carthref:"/Cart"},
  ];

  const filteredImages = allImages.filter(
    (image) => filter === "all" || image.category === filter
  );

  return (
    <div className="Shopping">
      <div className="sidebar">
        <h3>Filter Images</h3>
        <button className="filterButton" onClick={() => handleFilterChange("all")}>
          All
        </button>
        <button className="filterButton" onClick={() => handleFilterChange("slider")}>
          Slider
        </button>
        <button className="filterButton" onClick={() => handleFilterChange("ads")}>
          Ads
        </button>
      </div>

      <div className="content">
        <div className="bottomHeaderSec row">
          <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="MenuSec">
              <a className="linkMenu">Home</a>
              <a className="linkMenu">About</a>
              <a className="linkMenu">Blog</a>
              <a className="linkMenu">Shop</a>
              <a href="/customerAdded" className="linkMenu">Contact</a>
              <a href="/maps" className="linkMenu">Maps</a>
              <a href="Return" className="linkMenu">Return</a>
              <a href="/OrdersView" className="linkMenu">Orders</a>
              <a href="/Contact" className="linkMenu">Customers</a>
              <a href="/Cart" className="linkMenu">Cart</a>
            </div>
          </div>
        </div>


           <div className="bumber">
        {filteredImages.map((image, index) => (
          <div key={index} className={`bumberImager-${index + 1}`}>
            <div className="bi-1 ">
              <img className="bumpImg-1" src={image.src} alt={`Image ${index}`} />
              <div className="ad">
                <div className="ads-1">
                  <a href={image.carthref}><button className="ad-1">Add to Cart</button></a>
                </div>
                <div className="ads-2">
                  <a href={image.href}><button className="ad-2">Buy Now</button></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShoppingSection;
