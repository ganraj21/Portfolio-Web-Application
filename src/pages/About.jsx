import React from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <div>
      <div className="about_me" id="about_myself">
        <div className="container_01">
          <div className="my_img">
            <img id="img" src={about_me_img} alt="profile_image" />
          </div>
          <div className="my_info">
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              A Developer & Designer based in Pune, India 🌍. I'm an Endless
              seeker of Knowledge🧠. I speak, read and write in English. I'm
              constantly learning Web technologies and other design related
              topics, currently playing around with React👩🏾‍💻. When I'm not
              tapping the keys on the keyboard, you'll find me watching YouTube
              videos💻 or listening to music🎧. I'm fully committed
              to creating aesthetically beautiful,  responsive and usable
              products💻. I'm skilled in many areas of Web-development😎 and
              I’ll love to work with both Small and Large businesses😌.
            </p>
            <div className="personal_info">
              {personal_info_data.map((data, index) => {
                return (
                  <>
                    <div className="abc">
                      {data.section_one.map((e, index) => {
                        return (
                          <h4>
                            <span>{e.data_type} :</span> {e.data_value}
                          </h4>
                        );
                      })}
                    </div>
                    <div className="xyz">
                      {data.section_two.map((e, index) => {
                        return (
                          <h4>
                            <span>{e.data_type} :</span> {e.data_value}
                          </h4>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
