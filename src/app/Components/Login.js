import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="container2">
        <div className="top">
          <div className="text">
            {action}
          </div>
        </div>
        <div className="inputs">
          {action === "Login" ? <div></div> : <div className="input">
            <input type="text" placeholder="Name" />
          </div>}
        </div>
        <div className="input">
          <div className="text">
            Email
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <div className="header">
          <div className="text">
            Password
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot">
            Forgot your password?
          </div>}
        </div>
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
            Sign Up
          </div>
          <div className={action === "Sign Up" ? "submit green" : "submit"} onClick={() => { setAction("Login") }}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login