import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./Logo.css";

const LogoGroupomania = () => {
  return (
    <Link to = '../home'>
    <div className="Logo">
      <img src={Logo} alt="" />
    </div>
    </Link>
  );
};

export default LogoGroupomania;
