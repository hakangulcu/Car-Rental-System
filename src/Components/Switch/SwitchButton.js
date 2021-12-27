/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import Switch from "react-switch";

function SwitchButton() {
  //let history = useNavigate();
  let location = useLocation();

  const LoginHandler = (e) => {
    //e.target.style.backgroundColor = "red";
    //history.push("/login");
  };

  const SignUpHandler = (e) => {
    //e.target.style.backgroundColor = "black";
    //history.push("/signUp");
  };

  return (
    <div className="buttons" style={{ marginRight: "40%", marginBottom: "2%" }}>
      <button className="login-btn" onClick={LoginHandler}>
        Login
      </button>
      <button className="signUp-btn" onClick={SignUpHandler}>
        Sign Up
      </button>
    </div>
  );
}

export default SwitchButton;
