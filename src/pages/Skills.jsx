import React from "react";
import skills_gif from "../Image/skills.gif";
import SData from "./assets/Defaultdata/ApplicationData";
import "./Skills.css";
function Skills() {
  return (
    <>
      <div id="my_skills">
        <div className="my_skills">
          <h2>Skills and Abilities</h2>
        </div>
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            <img src={skills_gif} alt="Skills_Gif" />
          </div>
        </div>
        <div className="container_s">
          {SData.map((e, index) => (
            <div className="skill_box" key={index}>
              <div className="content_img_container">
                <img src={e.img_link} alt={e.img_content} />
                <h4 className="skill__title">{e.skill_name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
