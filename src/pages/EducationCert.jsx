import React from 'react';
import Certificates from './components/EducationInterface/Certificates';
import Education from './components/EducationInterface/Education';
import './EducationCert.css';
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
