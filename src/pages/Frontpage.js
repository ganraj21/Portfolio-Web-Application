import React, { useContext } from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from '../pages/components/Loaders/SvgBackground.jsx';
import TypeWriterEffect from 'react-typewriter-effect';
import { ServiceContext } from '../ServiceContext';
import Skeleton from './components/Loaders/Skeleton';
import './Frontpage.css';
import { HashLink } from 'react-router-hash-link';

const Frontpage = () => {
  const { imageStyle, isDarkMode } = useContext(ServiceContext);
  document.body.style = `background: ${isDarkMode ? '#1c2541' : '#f7d488'};`;
  return (
    <>
      <div
        className={`profile-container ${isDarkMode ? 'dark' : 'light'}`}
        id="home_page"
      >
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hello, I'M
                <span className="highlighted-text">Ganesh Ghadge</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1
                  style={{
                    display: 'flex',
                    gap: '6px',
                    color: `#fff`,
                  }}
                >
                  I am into
                  <span
                    style={{ color: `${isDarkMode ? '#5198ff' : '#d6abff'}` }}
                    className="type_effect"
                  >
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'Frontend Development',
                        'Backend Development',
                        'Commpetitive Programmer',
                        'Open-Source ',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                  I make websites that are easy to use, meet the client's needs,
                  and work well even as they grow. I pay close attention to
                  every little thing to make sure they work fast and are
                  reliable.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <HashLink to="/contact-me">
                <button className="btn primary-btn">Hire Me</button>
              </HashLink>
              <a href="./New_Ganesh_Ghadge_Resume.pdf" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            {/* <a href="#about_myself"> */}
            {imageStyle?.globalImages?.profile_img ? (
              <img
                className="profile-picture-background polygoncls"
                src={imageStyle?.globalImages?.profile_img}
                alt="profile-img"
              />
            ) : (
              <Skeleton
                className="polygoncls"
                props={{ width: '90%', height: '90%' }}
              />
            )}
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
};

export default Frontpage;
