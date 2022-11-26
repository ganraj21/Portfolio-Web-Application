import React from "react";
import "./Work";
import "./Work.css";
const Work = () => {
  const work_data = [
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
    <div id="my_work">
      <div className="work_page">
        <h2>Work Section</h2>
        <div className="project_work_page">
          {work_data.map((e, index) => (
            <div className="section" key={index}>
              <div className="container">{e.project_name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
