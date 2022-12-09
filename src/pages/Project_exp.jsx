import React from "react";
import ProjHome from "./components/ProjHome";
import "./Project_exp.css";
const Project_exp = () => {
  const proj_data = [
    {
      id: 1,
      project_name: "Dental-Clinic Web-Application",
      proj_creation_date: "Nov 2022",
      project_image: "asdasd",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
    {
      id: 2,
      project_name: "Cloud Resume Generator",
      proj_creation_date: "Oct 2022",
      project_image: "sdfjwer3sd",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
    {
      id: 3,
      project_name: "Profile Card",
      proj_creation_date: "feb 2022",
      project_image: "assduersdasd",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
    {
      id: 4,
      project_name: "Quotes Generator",
      proj_creation_date: "June 2022",
      project_image: "asdasdkfbsd",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
    {
      id: 5,
      project_name: "Weather App",
      proj_creation_date: "March 2022",
      project_image: "asdasddfusdf",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
    {
      id: 6,
      project_name: "Banking System",
      proj_creation_date: "Dec 2021",
      project_image: "asdasddfusdf",
      proj_description: "",
      proj_code_like: "",
      proj_live_link: "",
    },
  ];
  return (
    <div>
      <div className="work_page">
        <div className="proj_component">
          <ProjHome />
        </div>
        <div className="project_work_page">
          {proj_data.map((e, index) => (
            <div className="section" key={index}>
              <div className="container">
                <div className="proj_header">
                  <h3>{e.project_name}</h3>
                  <h4>{e.proj_creation_date}</h4>
                </div>
                <div className="proj_descriptions">
                  <p>{e.proj_description}</p>
                </div>
                <div className="proj_btns">
                  <button className="proj_code">Project Code</button>
                  <button className="proj_live">Live Project</button>
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
