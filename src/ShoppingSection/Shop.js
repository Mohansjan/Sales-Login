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
import "./Shop.css";


const ShoppingSection = () => {


  return (
    <div className="Shopping">
      <div className="bottomHeaderSec row">
        <div className="col-10">
          <div className="MenuSec">
            <a className="linkMenu">Home</a>
            <a className="linkMenu">About</a>
            <a className="linkMenu">Blog</a>
            <a className="linkMenu">Shop</a>
            <a href="/customer" className="linkMenu">Contact</a>
            <a href="/maps" className="linkMenu">Maps</a>
            <a href="Return" className="linkMenu">Return</a>
            <a href="/OrdersView" className="linkMenu">Orders</a>
            <a href="/Contact" className="linkMenu">Customers</a>
            <a href="/Cart" className="linkMenu">Cart</a>
          </div>
        </div>
      </div>
      <div className="sli"></div>
      <div className="bumberImager-1">
        <div className="bi-1">
          <img className="bumpImg-1" src={Add3} />
          <div className="ad">
            <div className="ads-1">
              <a href="/Contact"><button className="ad-1">Add to Cart</button></a>
            </div>
            <div className="ads-2">
              <a href="/Order"> <button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-2">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider2} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="/IOrder"><button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-3">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider3} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="/BOrder"><button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-4">
        <div className="bi-1">
          <img className="bumpImg-1" src={Add2} alt="Add2" />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="/WOrder"><button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-5">
        <div className="bi-1">
          <img className="bumpImg-1" src={Add5} alt="Add5" />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="/ROrder"> <button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-6">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider6} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="/VOrder"> <button className="ad-2">Buy Now</button></a>

            </div>
          </div>
        </div>
      </div>


      <div className="bumberImager-7">
        <div className="bi-1">
          <img className="bumpImg-1" src={Add4} alt="Add4" />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <a href="SOrder"><button className="ad-2">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>


      <div className="bumberImager-8">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider1} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <button className="ad-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-9">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider5} alt="Slider5" />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <button className="ad-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-10">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider2} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <button className="ad-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-11">
        <div className="bi-1">
          <img className="bumpImg-1" src={Slider4} alt="Slider4" />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <button className="ad-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bumberImager-12">
        <div className="bi-1">
          <img className="bumpImg-1" src={Add3} />
          <div className="ad">
            <div className="ads-1">
              <button className="ad-1">Add to Cart</button>
            </div>
            <div className="ads-2">
              <button className="ad-2">Buy Now</button>
            </div>
          </div>

        </div>
      </div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d156326.2094090925!2d80.22250177297047!3d12.974407574103864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720090733749!5m2!1sen!2sin"
          width="600" height="450"
          style={{ border: '0' }} /* Note: Ensure border value is a string */
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />




      </div>
      </div>
      );
};
      export default ShoppingSection;