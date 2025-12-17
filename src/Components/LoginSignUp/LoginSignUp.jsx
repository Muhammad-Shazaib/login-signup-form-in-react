import React, { useState } from "react";
import "./LoginSignUp.css";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    
      <div className="main">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action==="Login"?<></>:<div className="input">
              <FaUserAlt className="icon" />
              <input type="text" placeholder="Enter Your Name" />
            </div>}
            
            <div className="input">
              <MdEmail className="icon" />
              <input type="email" placeholder="Enter Your Email Id" />
            </div>
            <div className="input">
              <RiLockPasswordLine className="icon" />
              <input type="password" placeholder="Enter Your Password" />
            </div>
          </div>
{action==="Sign Up"? <></>: <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>}
          
          <div className="sumbit-container">
            <div
              className={action === "Login" ? "sumbit gray" : "sumbit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "sumbit gray" : "sumbit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>

  );
};

export default LoginSignUp;
