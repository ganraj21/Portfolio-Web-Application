import React from "react";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import "./EducationCert.css";
const EducationCert = () => {
  return (
    <>
      <div className="educ_cert" id="my-background">
        <Education />
        <Certificates />
      </div>
    </>
  );
};

export default EducationCert;
