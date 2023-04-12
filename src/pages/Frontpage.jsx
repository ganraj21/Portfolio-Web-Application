import React from "react";
import SocialMediaLinks from "./components/SocialMediaLinks";
import SvgBackground from "./components/SvgBackground";
import "./Frontpage.css";
import TypeWriterEffect from "react-typewriter-effect";

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
                <h1>
                  <TypeWriterEffect
                    multiTextLoop
                    // textStyle={{ fontWeight: 500 }}
                    startDelay={1000}
                    cursorColor="#ff5823"
                    multiText={[
                      "MERN Stack Developer",
                      "Commpetitive Programmer",
                      "I'm Into Web-Designing",
                      "I ♡ Web-Development",
                      "Open-Source Enthusiast 💻",
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                  />
                </h1>
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
            <div className="profile-picture-background"></div>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
