import React, { useState } from "react";
import "./login.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';  // Corrected import
import { emailValidator, passwordValidator } from "../LoginSection/validator";
import { useNavigate } from 'react-router-dom';
import FooterLogo from "../ImageSection/bottom_logo.webp";
import { TiShoppingCart } from "react-icons/ti";


const LoginSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',
    Password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailValidator(formData.Email)) {
      return setError('invalid Email or Password');
    }

    if (!passwordValidator(formData.Password)) {
      return setError('Invalid Email or Password');
    }

    if (formData.Email !== 'Mohan@gmail.com' || formData.Password !== 'Mohan@123') {
      return setError('Invalid Email or Password');
    }

    setLoading(true);

    try {
      const formDataCopy = { ...formData };

      const response = await axios.post('https://dev-mohansjan.gateway.apiplatform.io/v1/login', formDataCopy, {
        headers: {
          'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
          'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
          'Content-Type': 'application/json'
        }
      });
      console.log('Login successful:', response.data);
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error);
      setError('Invalid username or password, Please try again.');
      alert('Login failed');
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container-login">
      <div className="row main-con10 text-center">
        <div className="col-md-4 text-center company__in10">
          <span className="company__logo">
            <h2>
              <TiShoppingCart  className="llggoo"/>
            </h2>
          </span>
          {/* <h4 className="company_title">YUVA STORE</h4> */}
          <img className="company-titles" src={FooterLogo} alt="FooterLogo"/>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row">
              <h2>Log In</h2>
            </div>
            <div className="row-in">
              <form onSubmit={handleSubmit} className="form-control login">
                <div className="row-input">
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    className="form-user"
                    placeholder="UserName"
                    onChange={handleChange}
                  />
                </div>
                <div className="row-input">
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    className="form-user"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="row-input">
                  <span className="fa fa-lock"></span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="Password"
                   
                    className="form-input"
                    placeholder="Password"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                  <span className="pass-visible" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                  </span>
                </div>
                <div className="rows">
                  <input type="checkbox" name="remember_me" className="form-userlist" />
                  <label htmlFor="remember_me" className="form-userList">Remember Me!</label>
                </div>
                {error.length > 0 && (<div style={{ marginBottom: "10px", color: "red" }}>{error}</div>)}
                <div className="row">
                  <input
                    type="submit"
                    className="btn-save"
                    value="Submit"
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
            <div className="row">
              <p className="regi">Don't have an account? <a href="#">Register Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
