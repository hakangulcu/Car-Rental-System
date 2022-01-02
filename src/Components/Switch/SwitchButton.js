/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./switch.css";

import { useNavigate, useLocation } from "react-router-dom";
import Switch from "react-switch";

function SwitchButton() {
  let navigate = useNavigate();

  const LoginHandler = (e) => {
    navigate("/login");
  };

  const SignUpHandler = (e) => {
    navigate("/signUp");
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
