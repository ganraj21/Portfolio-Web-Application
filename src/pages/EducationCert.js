import React, { useContext } from 'react';
import Certificates from './components/EducationInterface/Certificates';
import Education from './components/EducationInterface/Education';
import './EducationCert.css';
import { ServiceContext } from '../ServiceContext';
const EducationCert = () => {
  const { isDarkMode } = useContext(ServiceContext);
  return (
    <>
      <div
        className={`educ_cert ${isDarkMode ? 'dark' : 'light'}`}
        id="my-background"
      >
        <Education />
        <Certificates />
      </div>
    </>
  );
};

export default EducationCert;
