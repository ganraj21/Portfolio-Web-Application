import React from "react";
import SData from "./components/ApplicationData";
import "./Skills.css";
function Skills() {
  const my_skill_description = [
    {
      index: 1,
      info: "⚡ Building responsive website front end using ReactJS",
    },
    {
      index: 2,
      info: "⚡Developing mobile applications using Flutter, React Native and native Android ",
    },
    {
      index: 3,
      info: "⚡ Creating application backend in Node, Express & Flask",
    },
  ];
  return (
    <>
      <div id="my_skills">
        <div className="my_skills">
          <h2>Skills and Abilities</h2>
        </div>
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            {my_skill_description.map((data, index) => (
              <p key={index}>{data.info}</p>
            ))}
          </div>
        </div>
        <div className="container_s">
          {SData.map((e, index) => (
            <div className="skill_box" key={index}>
              <div className="content_img_container">
                <img src={e.img_link} alt={e.img_content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
