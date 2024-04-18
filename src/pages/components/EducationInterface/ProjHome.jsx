import React, { useContext } from 'react';
import Githubcomp from '../FooterInterface/Githubcomp';
import { ServiceContext } from '../../../ServiceContext';
import './ProjHome.css';
import Skeleton from '../Loaders/Skeleton';

const ProjHome = () => {
  const { imageStyle, isDarkMode } = useContext(ServiceContext);
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>
            Projects <span> & </span> Experiences
          </h3>
          <p>
            You can find all of my projects on my profile on Github. You can
            view my activities, contributions and code on these projects. Some
            of these are completed and some are in progress. You can also leave
            comments on the profile and start a discussion. I am always looking
            for new projects and Ideas. You can also reach out to me on any of
            the social media channels mentioned below.
          </p>
          <Githubcomp
            backgroundColor="#512da8"
            shadow={`${isDarkMode ? '#482e87' : '#edededa8'} 0px 0px 9px`}
            href="https://github.com/ganraj21/Portfolio-Web-Application"
          />
        </div>
        <div className="proj_right">
          {imageStyle?.globalImages?.proj_img ? (
            <img src={imageStyle?.globalImages?.proj_img} alt="Project Img" />
          ) : (
            <Skeleton props={{ width: '80%', height: '90%' }} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjHome;
