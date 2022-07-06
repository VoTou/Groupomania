import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to = '../home'>
          <img src={Home} alt="Accueil" />
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
