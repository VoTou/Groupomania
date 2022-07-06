import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { getAllUsers } from "../../api/UserRequest";
import User from "../User/User";
import { useSelector } from "react-redux";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>Vous les connaissez peut-être...</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;