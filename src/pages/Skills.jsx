import React from "react";
import SData from "./assets/ApplicationData";
import "./Skills.css";
function Skills() {
  const my_skill_description = [
    {
      index: 1,
      info: "⚡ Building responsive website front end using ReactJS",
    },
    {
      index: 2,
      info: "⚡Developing mobile applications using React JS , Node JS and Material UI ",
    },
    {
      index: 3,
      info: "⚡ Creating application backend in Node JS & Express JS",
    },
  ];
  return (
    <>
      <div id="my_skill">
        <div className="my_skills">
          <h2>
            My Skills <span>&</span> Abilities
          </h2>
        </div>
        {/* <div className="svg_blobs">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#47afff"
              d="M362.5,322.5Q335,405,245.5,395.5Q156,386,90,313Q24,240,92.5,171.5Q161,103,241,101Q321,99,355.5,169.5Q390,240,362.5,322.5Z"
            />
          </svg>
        </div> */}
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            {my_skill_description.map((data, index) => (
              <div key={index}>{data.info}</div>
            ))}
          </div>
        </div>
        <div className="container_s">
          {SData.map((e, index) => (
            <div
              className="skill_box"
              key={index}
              style={{ boxShadow: `0px 0px 12px ${e.bx_shadow}` }}
            >
              <div className="content_img_container">
                <img
                  src={e.img_link}
                  alt={e.img_content}
                  style={{ height: e.img_height, filter: e.img_styles }}
                />
                <h3>{e.skill_name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
