import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Abonnements</span>
          </div>
          <div className="verticalLign"></div>
          <div className="follow">
            <span>1</span>
            <span>Abonnés</span>
          </div>
          {ProfilePage && (
            <>
              <div className="verticalLign"></div>
              <div className="follow">
                <span>3</span>
                <span>Publications</span>
              </div>
            </>
          )}
        </div>
        <hr />
        {ProfilePage ? "" : <span>Mon Profil</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
