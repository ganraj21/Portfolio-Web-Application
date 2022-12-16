import React from "react";
import SocialMediaLinks from "./components/SocialMediaLinks";
import "./Frontpage.css";
import SvgBackground from "./components/SvgBackground";
function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <SocialMediaLinks />
            </div>

            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Ganesh Ghadge</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>I Am MERN Developer</h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn primary-btn">Hire Me</button>
              </a>
              <a href="./Ganesh_Ghadge_Resume.pdf" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            {/* <SvgImg /> */}
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <SvgBackground />
    </>
  );
}

export default Frontpage;
