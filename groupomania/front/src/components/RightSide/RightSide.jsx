import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to = '../home'>
          <img src={Home} alt="Accueil" />
        </Link>
        <UilSetting />
        <img src={Comment} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
