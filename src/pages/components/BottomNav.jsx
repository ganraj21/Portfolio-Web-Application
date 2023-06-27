import React from 'react';
import './BottomNav.css';
import SocialMediaLinks from './SocialMediaLinks';
import my_navbar_data from '../assets/NavData';
import { HashLink } from 'react-router-hash-link';
import personal_info_data from '../assets/AboutIn';
import Githubcomp from './Githubcomp';

const BottomNav = () => {
  // const [myValue, setMyValue] = useState(0);

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("activeIndex");
  //   console.log(storedValue);
  //   if (storedValue) {
  //     setMyValue(storedValue);
  //   }
  // }, [myValue]);
  // className={myValue === index ? "active_navbtn" : "navbtn"}

  return (
    <>
      <div className="bottom_nav_container">
        <div className="bottom_nav_section">
          <div className="bot_nav_left">
            <div className="bot_left_header">
              <HashLink
                to="/users/contact/info"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <h3>Ganraj21 | Portfolio</h3>
              </HashLink>
            </div>
            <div className="bot_middle_info">
              <p className="basic_info">
                Need any help with your projects? contact me at the places
                mentioned below. I will try to get back to you as fast as I can.
              </p>
              <p className="f_info">Follow me for more such Projects.</p>
            </div>
            <div>
              <Githubcomp href="https://github.com/ganraj21" />
            </div>
          </div>
          <div className="bot_nav_middle">
            <div className="bot_middle_header">
              <h3>Quick Links</h3>
            </div>
            <div className="bot_nav">
              {my_navbar_data.map((data, index) => {
                return (
                  <>
                    <HashLink key={index} to={data.nav_link}>
                      <i className="fa-solid fa-angles-right"></i>
                      <p> {data.navbar_name}</p>
                    </HashLink>
                  </>
                );
              })}
            </div>
          </div>
          <div className="bot_nav_right">
            <div className="bot_right_header">
              <h3>Contact Info</h3>
            </div>
            <div className="bot_contact_info">
              {personal_info_data.map((data, index) => {
                return (
                  <div className="bot_cdiv" key={index}>
                    {data.section_two.map((e, i) => {
                      return (
                        <div className="contact_me_here" key={i}>
                          <i
                            className={e.icon_class}
                            style={{ color: e.ic_color }}
                          ></i>
                          <p>{e.data_value}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <SocialMediaLinks style={{ gap: '6px', display: 'flex' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
