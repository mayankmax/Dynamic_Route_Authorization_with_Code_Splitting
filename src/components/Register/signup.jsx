// Signup.js
import React from "react";
import './authform.css'

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
