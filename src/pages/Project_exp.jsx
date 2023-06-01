import React, { useState } from 'react';
import ProjHome from './components/ProjHome';
import { HashLink } from 'react-router-hash-link';
import './Project_exp.css';
import proj_data from './assets/ProjectsData';

const Project_exp = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCards = proj_data.slice(0, 5);

  return (
    <div>
      <div className="work_page" id="my-work">
        <div className="proj_component">
          <ProjHome />
        </div>
        <div className="project_work_page">
          {visibleCards.map((e, index) => (
            <div
              className="section"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="pcontainer">
                <img src={e.project_image} alt="project Images" />
                <div className="proj_header">
                  <h3>{e.project_name}</h3>
                  <h4>{e.proj_creation_date}</h4>
                </div>
                <div className="proj_descriptions">
                  <p>{e.proj_description}</p>
                </div>
                <div className="proj_btns">
                  <a
                    href={e.proj_code_like}
                    target={e.proj_code_like !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button className="proj_code">Project Code</button>
                  </a>
                  <a
                    href={e.proj_live_link}
                    target={e.proj_live_link !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button className="proj_live">Live Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {showAllCards && (
            <>
              {proj_data.slice(6).map((e, index) => (
                <div
                  className="section"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="pcontainer">
                    <img src={e.project_image} alt="project Images" />
                    <div className="proj_header">
                      <h3>{e.project_name}</h3>
                      <h4>{e.proj_creation_date}</h4>
                    </div>
                    <div className="proj_descriptions">
                      <p>{e.proj_description}</p>
                    </div>
                    <div className="proj_btns">
                      <a href={e.proj_code_like}>
                        <button className="proj_code">Project Code</button>
                      </a>
                      <a href={e.proj_live_link}>
                        <button className="proj_live">Live Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  width: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <HashLink
                  onClick={() => setShowAllCards(false)}
                  to={'/#my-work'}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="view__btn"
                >
                  Okey,I got it
                </HashLink>
              </div>
            </>
          )}

          {!showAllCards && (
            <div
              style={{
                width: '350px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setShowAllCards(true)}
                data-aos="fade-down"
                data-aos-duration="2000"
                className="view__btn"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project_exp;
