import React from "react";
import "../styles/Login.css";

function Signup() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h3>Please login</h3>
        <form className="login-form">
          <label className="login-label">Subdomain</label>
          <br></br>
          <input className="login-input" type="text" placeholder="subdomain" />
          <br></br>
          <label className="login-label">Password</label>
          <br></br>
          <input className="login-input" type="text" placeholder="password" />
          <br></br>
          <button>Create subdomain</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
