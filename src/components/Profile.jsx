import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const {
    avatar,
    email,
    first_name,
    last_name,
    date_of_birth,
    employment,
    address,
  } = props?.profile;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={avatar} alt={email} />
          <strong>{`${first_name} ${last_name}`}</strong>
        </div>
        <div className="card-back">
          <h1>{date_of_birth}</h1>
          <p>{employment?.title}</p>
          <p>{address?.city}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
