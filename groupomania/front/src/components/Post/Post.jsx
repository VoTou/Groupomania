import React, { useState } from "react";
import "./Post.css";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostRequest";
import { useDispatch, useSelector } from "react-redux";
import DeleteCard from "../DeleteCard/DeleteCard";
import { updatePost } from "../../actions/PostAction";
import { UilPen } from "@iconscout/react-unicons";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const dispatch = useDispatch();

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(data._id, textUpdate, user._id));
    }
    setIsUpdated(false);
    window.location.reload();
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "14px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.posterName}</b>
        </span>
        {/* Edition du post */}
        <div className="desc-button">
          {isUpdated === false && <p>{data.desc}</p>}
          {isUpdated && (
            <div>
              <textarea
                cols="31"
                rows="5"
                defaultValue={data.desc}
                onChange={(e) => setTextUpdate(e.target.value)}
              />
              <div>
                <button className="btn" onClick={updateItem}>
                  Valider les modifications
                </button>
              </div>
            </div>
          )}
          {(user._id === data.userId || user.isAdmin === true) && (
            <div>
              <div onClick={() => setIsUpdated(!isUpdated)}>
                <UilPen className="modify" width="2rem" height="1.5rem" />
              </div>
              <DeleteCard id={data._id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
