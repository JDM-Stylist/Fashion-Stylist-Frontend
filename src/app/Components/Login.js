import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "Sign Up") {
      try {
        const response = await axios.post('http://localhost:5000/signup', { name, email, password: pass });
        console.log(response.data); // you can handle response as needed
      } catch (error) {
        console.error("Error signing up:", error);
      }
    } else { // Login
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password: pass });
        console.log(response.data); // you can handle response as needed
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="container2">
        <div className="top">
          <div className="text">
            {action}
          </div>
        </div>
        {action === "Sign Up" && (
          <div className="inputs">
            <div className="input">
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            </div>
          </div>
        )}
        <div className="input">
          <div className="text">
            Email
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          </div>
        </div>
        <div className="header">
          <div className="text">
            Password
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
            Sign Up
          </div>
          <div className={action === "Sign Up" ? "submit green" : "submit"} onClick={() => { setAction("Login") }}>
            Login
          </div>
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
