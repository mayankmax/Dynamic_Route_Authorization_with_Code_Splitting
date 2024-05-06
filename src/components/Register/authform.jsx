// Login.js
import React from "react";
import './authform.css'

const Login = () => {
  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
