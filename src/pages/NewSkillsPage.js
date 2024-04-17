import React, { useContext } from 'react';
// import SData from './assets/ApplicationData';
import './NewSkillsPage.css';
import { ServiceContext } from '../ServiceContext';
const NewSkillsPage = () => {
  const { csStyleData, isDarkMode } = useContext(ServiceContext);

  return (
    <>
      <section id="my_skill" className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="my_skills">
          <h2>
            My Skills <span>&</span> Abilities
          </h2>
        </div>
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            {csStyleData?.my_skill_description?.map((data, index) => (
              <div className="cards" key={index}>
                {data.info}
              </div>
            ))}
          </div>
        </div>
        <div className="contain_div">
          <div className="container_s">
            {csStyleData?.my_skills_data?.map((e, index) => (
              <div
                className="skill_box"
                key={index}
                style={{ boxShadow: `0px 0px 12px ${e.bx_shadow}` }}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="content_img_container">
                  <img
                    src={e.img_link}
                    alt={e.img_content}
                    style={{ height: e.img_height, filter: e.img_styles }}
                    loading="lazy"
                  />
                </div>
                <h3>{e.skill_name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSkillsPage;
