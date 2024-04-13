import React, { useContext } from 'react';
import { ServiceContext } from '../ServiceContext';
import './AboutPage.css';

const AboutPage = () => {
  const { rootData, imageStyle } = useContext(ServiceContext);
  console.log(imageStyle);
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img
            id="img"
            src={imageStyle?.globalImages?.about_me_img}
            alt="profile_image"
          />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I am a Developer and Designer based in Pune, India 🌍. I have always
            been fascinated by Knowledge 🧠 and learning new things. Throughout
            my life, I have spoken, read and written in English fluently.
            Currently, I'm exploring Restful API's 👩🏾‍💻 as part of my skillset.
            When not working on projects or spending time with family or
            friends, you can usually find me watching YouTube videos 💻 or
            listening to music 🎧. As an experienced Web developer who is
            skilled in many areas of development 😎 (responsive design being
            one),I would love to work with businesses both small and large!
          </p>
          <div className="personal_info">
            {rootData?.personal_info_data?.map((data, index) => {
              return (
                <>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
