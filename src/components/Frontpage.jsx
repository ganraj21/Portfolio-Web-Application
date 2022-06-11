import React from "react";
import Typewriter from "typewriter-effect";
import "./Frontpage.css";
import pic01 from "../Image/download.jfif";
function Frontpage() {
  return (
    <>
      <div>
        <div className="bi_01">
          <div className="cover">
            <div className="brief_information">
              <h3>
                <span>Hi </span>There...
              </h3>
              <div className="text">
                <h2>
                  I am <span>Ganesh Bhau Ghadge</span>
                </h2>
                <div className="text">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "I'm a Competitive Programmer",
                        "I'm a Web Developer",
                        "I'm a Tech Enthusiast",
                        "I'm a React Developer",
                        "I'm a Youtuber",
                      ],
                    }}
                  />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                consectetur similique dignissimos accusantium laboriosam
                corrupti recusandae placeat blanditiis. Soluta, temporibus?
              </p>
              <div className="grp-buttons">
                <a href="/about">About Me</a>
                <a href="#about">Download CV</a>
              </div>
            </div>
            <div className="Pro_img">
              <img className="img" src={pic01} alt="profile image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
