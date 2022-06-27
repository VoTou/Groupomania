import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoGroupomania from "../logo/Logo";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoGroupomania />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
