import React from "react";
import ProjHome from "./components/ProjHome";
import "./Project_exp.css";
const Project_exp = () => {
  const proj_data = [
    {
      id: 1,
      project_name: "Banking System",
      project_image: "asdasd",
    },
    {
      id: 2,
      project_name: "Cloud Resume Generator",
      project_image: "sdfjwer3sd",
    },
    {
      id: 3,
      project_name: "Profile Card",
      project_image: "assduersdasd",
    },
    {
      id: 4,
      project_name: "Quotes Generator",
      project_image: "asdasdkfbsd",
    },
    {
      id: 5,
      project_name: "Weather App",
      project_image: "asdasddfusdf",
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
              <div className="container">{e.project_name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project_exp;
