import React from "react";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import "./EducationCert.css";
const EducationCert = () => {
  return (
    <>
      <div className="educ_cert" id="education-certifications">
        <h2>Education and Certifications sections</h2>
        <Education />
        <Certificates />
      </div>
    </>
  );
};

export default EducationCert;
