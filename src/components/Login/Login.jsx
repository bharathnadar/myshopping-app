import React, { useState } from 'react';
import "./Login.css"
const Login= () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let formErrors = {};
    if (isLogin) {
      if (!formData.username || formData.username.length > 15) {
        formErrors.username = 'Username is required and max 15 characters';
      }
      if (!formData.password || formData.password.length > 12) {
        formErrors.password = 'Password is required and max 12 characters';
      }
    } else {
      if (!formData.firstName || !/^[a-zA-Z]+$/.test(formData.firstName) || formData.firstName.length > 20) {
        formErrors.firstName = 'First Name is required, max 20 characters, only alphabets';
      }
      if (formData.lastName && (!/^[a-zA-Z]+$/.test(formData.lastName)||formData.lastName.length > 20 )) {
        formErrors.lastName = 'Last Name can have max 20 characters, only alphabets';
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = 'Valid email is required';
      }
      if (!formData.mobile || formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) {
        formErrors.mobile = 'Mobile number is required and must be 10 digits';
      }
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <div className="error-message">{errors.mobile}</div>}
            </div>
          </>
        )}
        <div className="form-group">
          <label>{isLogin ? 'Username' : 'Username'}</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label>{isLogin ? 'Password' : 'Password'}</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="form-group">
          <button type="submit" className="sub_btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="res_btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Not Registered? Sign Up' : 'Already Registered? Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
