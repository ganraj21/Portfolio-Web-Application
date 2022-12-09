import React from "react";
import proj_img from "../../Image/proj_img.png";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h2>Project and Experience Section</h2>
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
