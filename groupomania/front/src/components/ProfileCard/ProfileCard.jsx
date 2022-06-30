import { useSelector } from "react-redux";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="Couverture"
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="Profil"
        />
      </div>
      <div className="ProfileName">
        <span>{user.username}</span>
        <span>{user.worksAt ? user.worksAt : ""}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followings.length}</span>
            <span>Abonnements</span>
          </div>
          <div className="verticalLign"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Abonnés</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="verticalLign"></div>
              <div className="follow">
                <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                <span>Publications</span>
              </div>
            </>
          )}
        </div>
        <hr />
        {location === "profilePage" ? (
          ""
        ) : (
          <span>
            <Link
              style={{ textDecoration: "none", color: "var(--primaire)", fontWeight: "bold" }}
              to={`/profile/${user._id}`}
            >
              Mon Profil
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
