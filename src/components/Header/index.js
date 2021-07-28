/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix logo"
        />
      </div>
      <div className="header--user">
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="user avatar"
        />
      </div>
    </header>
  );
};
