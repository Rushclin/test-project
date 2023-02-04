import axios from "axios";
import React, { useState } from "react";
import Profile from "../components/Profile";
import "./ProfilePage.css";

const ProfilePage = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [nbr, setNbr] = useState(0);
  const [loading, setLoading] = useState(false);

  const getProfile = (event) => {
    event.preventDefault();
    if (nbr <= 0) {
      alert("Le nombre doit etre plus grand que 0");
      setNbr(0);
      return;
    }

    setLoading(true);

    axios
      .get(`https://random-data-api.com/api/users/random_user?size=${nbr}`)
      .then((response) => {
        setProfiles(response?.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="input">
          <label htmlFor="nombre">Combien d'utilisateur a afficher ?</label>
          <input
            type="number"
            name="nombre"
            id="nombre"
            className="form-input"
            placeholder="Nombre d'utilisateur"
            value={nbr}
            onChange={(e) => setNbr(e.target.value)}
          />
        </div>
        <div className="buttonContainer">
          <button
            className="btn"
            type="submit"
            onClick={(event) => getProfile(event)}
            disabled={loading}
          >
            Liste des informations
          </button>
        </div>
      </div>

      <div className="list-card">
        {profiles.map((profile) => (
          <Profile profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
