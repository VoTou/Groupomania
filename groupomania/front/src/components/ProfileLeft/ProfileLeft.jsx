import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoGroupomania from "../logo/Logo";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoGroupomania />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
