import React from "react";
import Certificates from "./components/Certificates";
import "./EducationCert";
const EducationCert = () => {
  return (
    <>
      <div className="educ_cert" id="education-certifications">
        <h2>Education and Certifications sections</h2>
        <Certificates />
      </div>
    </>
  );
};

export default EducationCert;
