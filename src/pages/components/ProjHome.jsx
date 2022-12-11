import React from "react";
import proj_img from "../../Image/proj_img.png";
import Githubcomp from "./Githubcomp";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>Project & Experience</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            omnis nihil cum praesentium magnam pariatur, dolores inventore
            tempore veritatis saepe consectetur error vitae facilis facere esse
            laborum dolorum beatae modi!
          </p>
          <Githubcomp backgroundColor="#512da8" />
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
