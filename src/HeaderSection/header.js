import React, { useState } from "react";
import "../HeaderSection/header.css";
import { FaAngleDown } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiMenu2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import logo from "../ImageSection/logo.webp";
import { IoMdContact } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import AdminPanel from "./AdminPanel.js";


const HeaderSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false); // State for admin panel

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleAdminPanel = () => {
    setShowAdminPanel(!showAdminPanel);
  };

  return (
    <div className="HeaderWrapper">
      <div className="topHeader row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="dropdown">
            <a
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Eng <FaAngleDown className="header-arrow" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Tamil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Malayalam
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hindi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <span className="headertop-center">Winter sales soon</span>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <a className="remover-header">
            <GiCancel />
          </a>
        </div>
      </div>
      <div className="midHeaderSec row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div className="headerLogo-sec">
            <RiMenu2Line className="header-toggle" onClick={toggleAdminPanel} />
            <div className="logo-imager">
              <img className="logoBrand" src={logo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-xs-12">
          <div className="search-grp">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control searcher"
                placeholder="Search for articles"
              />
            </div>
            <BsSearch />
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6">
          <div className="midHeader-rightSec">
            <IoMdContact className="Mid-Svg2" onClick={togglePopup} />
            <IoBagOutline className="Mid-Svg" />
          </div>
        </div>
      </div>
      <div className="bottomHeaderSec row">
        <div className="col-10">
          <div className="MenuSec">
            <a className="linkMenu">Home</a>
            <a className="linkMenu">About</a>
            <a className="linkMenu">Blog</a>
            <a className="linkMenu">Shop</a>
            <a href="/CustomerAdded" className="linkMenu">Contact</a>
            <a href="/maps" className="linkMenu">Maps</a>
            <a href="Return" className="linkMenu">Return</a>
            <a href="/OrdersView" className="linkMenu">Orders</a>
            <a href="/Contact" className="linkMenu">Customers</a>
            <a href="/Cart" className="linkMenu">Cart</a>
          </div>
        </div>
      </div>
      {/* Popup Window */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <FaCircleUser className="user-icon" />
            <p className="poppins-1">Mohan</p>
            <p className="poppins-2">Mohan@gmail.com</p>
            <button className="close-btn-1" onClick={togglePopup}>
              Close
            </button>
            <a href="login">
              <button className="Logout-btn" onClick={togglePopup}>
                Logout
              </button>
            </a>
          </div>
        </div>
      )}
      {/* Admin Panel */}
      <AdminPanel isOpen={showAdminPanel} togglePanel={toggleAdminPanel} />
    </div>
  );
};

export default HeaderSection;
