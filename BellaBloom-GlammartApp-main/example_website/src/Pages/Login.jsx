import React from 'react';
import '../Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/');
  };

  return (
    <div className='lognsignup'>
      <div className="logn-signup-container">
        <h1>Welcome Back!</h1>
        <p>Be Beautiful, Be You, Be In!</p>
        <div className="lognsignup-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={goToSignup}>Login</button>
        <p className="lognsignup-login">Don't have an account? <Link to='/signup'><span>SignUp here</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
