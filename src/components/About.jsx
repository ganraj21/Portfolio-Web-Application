import React from "react";
import pic from "../Image/images.png";
import "./About.css";
function About() {
  return (
    <div>
      <div className="about_me" id="about_myself">
        <div className="container_01">
          <div className="my_img">
            <img id="img" src={pic} alt="profile image" />
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
              <div className="abc">
                <h4>
                  <span>Age :</span> 20
                </h4>
                <h4>
                  <span>Email :</span> ganrajp036956@gmail.com
                </h4>
                <h4>
                  <span>Phone :</span> +91-8010844174
                </h4>
              </div>
              <div className="xyz">
                <h4>
                  <span>Gender :</span> male
                </h4>
                <h4>
                  <span>Languages :</span> Marathi/Hindi/English
                </h4>
                <h4>
                  <span>Address :</span> Pune, India - 413102
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
