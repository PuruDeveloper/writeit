import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [subDomain, setSubDomain] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    if (subDomain && password) {
      console.log(subDomain, password);
      setSubDomain("");
      setPassword("");
    } else {
      alert("Enter both subDomain and password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h3>Please login</h3>
        <form className="login-form">
          <label className="login-label">Subdomain</label>
          <br></br>
          <input
            className="login-input"
            type="text"
            placeholder="subdomain"
            value={subDomain}
            onChange={(e) => setSubDomain(e.target.value)}
          />
          <br></br>
          <label className="login-label">Password</label>
          <br></br>
          <input
            className="login-input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button onClick={(e) => userLogin(e)}>Access my subdomain</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
