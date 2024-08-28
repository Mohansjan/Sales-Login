import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { emailValidator, passwordValidator } from "../LoginSection/validator";
import { useNavigate } from 'react-router-dom';
import FooterLogo from "../ImageSection/bottom_logo.webp";
import { TiShoppingCart } from "react-icons/ti";

const SignupSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',
    Password: '',
    Confirm_Password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailValidator(formData.Email)) {
      return setError('Please enter a valid email ID');
    }

    if (!passwordValidator(formData.Password)) {
      return setError('Password should have a minimum of 8 characters with the combination of uppercase, lowercase, numbers, and special characters');
    }

    if (formData.Password !== formData.Confirm_Password) {
      return setError('Passwords do not match');
    }

    setLoading(true);

    try {
      // Fetch existing users to check if username or email already exists
      const signupResponse = await axios.get('https://dev-mohansjan.gateway.apiplatform.io/v1/Signup',{
        headers:{
          'apikey' : 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
          'pkey' : '3fcc20cdc093c0403fc55b721aab6f3c',
          "Content-Type" : 'application/json'
        }
      });
      const existingUsers = signupResponse.data;

      const isUserNameTaken = existingUsers.some(user => user.UserName === formData.UserName);
      const isEmailTaken = existingUsers.some(user => user.Email === formData.Email);

      if (isUserNameTaken || isEmailTaken) {
        setLoading(false);
        if (isUserNameTaken && isEmailTaken) {
          return setError('Username and Email already declared');
        } else if (isUserNameTaken) {
          return setError('Username already declared');
        } else {
          return setError('Email already declared');
        }
      }

      // Proceed with signup if no conflicts
      const response = await axios.post('https://dev-mohansjan.gateway.apiplatform.io/v1/Signup', formData, {
        headers: {
          'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
          'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
          'Content-Type': 'application/json'
        }
      });

      console.log('Account Created', response.data);
      alert('Account Created');
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error);
      setError('Signup failed. Please try again.');
      alert('Signup failed');
    }

    setLoading(false);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirm') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <div className="container-login23">
      <div className="row main-con11 text-center">
        <div className="col-md-3 col-sm-12 col-xs-12 text-center company__in11">
          <span className="company__logoo">
            <h2 className="lgo">
              <TiShoppingCart className="llggoo" />
            </h2>
          </span>
          <img className="company-titles" src={FooterLogo} alt="FooterLogo" />
        </div>
        <div className="col-md-9 col-xs-12 col-sm-12 login_forms ">
          <div className="container-fluids">
            <div className="rowed">
              <h2 className="lgooo">SIGN UP</h2>
            </div>
            <div className="rowed">
              <form onSubmit={handleSubmit} className="form-controls login">
                <div className="rowed">
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    className="form-users"
                    placeholder="UserName"
                    value={formData.UserName}
                    onChange={handleChange}
                  />
                </div>
                <div className="rowed">
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    className="form-users"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="rowed">
                  <span className="fa fa-lock"></span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="Password"
                    id="Password"
                    className="form-inputs"
                    placeholder="Password"
                    value={formData.Password}
                    onChange={handleChange}
                  />
                  <span className="visible-1" onClick={() => togglePasswordVisibility('password')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                  </span>
                </div>

                <div className="rowed">
                  <span className="fa fa-lock"></span>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="Confirm_Password"
                    id="Confirm_Password"
                    className="form-inputs"
                    placeholder="Confirm Password"
                    value={formData.Confirm_Password}
                    onChange={handleChange}
                  />
                  <span className="visible-2" onClick={() => togglePasswordVisibility('confirm')} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                  </span>
                </div>

                <div className="roweds">
                  <input type="checkbox" name="remember_me" className="form-userlists" />
                  <label htmlFor="remember_me" className="form-userLists">Remember Me!</label>
                </div>
                {error.length > 0 && (<div style={{ marginBottom: "10px", color: "red" }}>{error}</div>)}
                <div className="rowed">
                  <input
                    type="submit"
                    className="btn-saves"
                    value="Submit"
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
            <div className="rowed">
              <p className="regis">Already have an account? <a href="/login">Login Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
