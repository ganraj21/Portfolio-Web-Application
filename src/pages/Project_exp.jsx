import React from "react";
import ProjHome from "./components/ProjHome";
import "./Project_exp.css";
import proj_data from "./assets/ProjectsData";
const Project_exp = () => {
  return (
    <div>
      <div className="work_page" id="my-work">
        <div className="proj_component">
          <ProjHome />
        </div>
        <div className="project_work_page">
          {proj_data.map((e, index) => (
            <div
              className="section"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="pcontainer">
                <img src={e.project_image} alt="project Images" />
                <div className="proj_header">
                  <h3>{e.project_name}</h3>
                  <h4>{e.proj_creation_date}</h4>
                </div>
                <div className="proj_descriptions">
                  <p>{e.proj_description}</p>
                </div>
                <div className="proj_btns">
                  <a href={e.proj_code_like}>
                    <button className="proj_code">Project Code</button>
                  </a>
                  <a href={e.proj_live_link}>
                    <button className="proj_live">Live Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project_exp;
