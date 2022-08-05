import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/rashid.nashtar.5">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/rashid-nashtar-6a8874233">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Rashid</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>Front End Developer 💻</h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building web applications with front end operations.
            </span>
          </div>

          <div className="profile-options">
            <a href="RashidNashtarCV.pdf" download="RashidNashtarCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
