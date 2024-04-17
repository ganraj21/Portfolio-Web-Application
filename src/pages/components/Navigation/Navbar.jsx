import React, { useContext, useState } from 'react';
import { ServiceContext } from '../../../ServiceContext';
import { HashLink } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import nav_logo from '../../../Image/Profile_imgs/nav_logo.png';
import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiConversation } from 'react-icons/bi';
import { TfiControlForward } from 'react-icons/tfi';
import { RxDashboard } from 'react-icons/rx';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const { rootData, getStyleData, csStyleData, isDarkMode, toggleTheme } =
    useContext(ServiceContext);
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);
  const [isBtnClick, setBtnClick] = useState(0);

  const handleClick = () => {
    setActive(!isActive);
    setBtnActive(!isbtnActive);
  };

  return (
    <>
      <div className={`nav-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <img src={nav_logo} alt="logo" />
          </HashLink>
        </div>
        <div
          className={`${isActive ? 'active_links  ' : 'links nav-bg'} nav-bg`}
        >
          <div className="MenuItems ">
            {rootData?.my_navbar_data?.map((data, index) => {
              const iconComponents = {
                AiOutlineHome: AiOutlineHome,
                TfiControlForward: TfiControlForward,
                RxDashboard: RxDashboard,
                RiCodeSSlashLine: RiCodeSSlashLine,
                AiOutlineSafetyCertificate: AiOutlineSafetyCertificate,
                BiConversation: BiConversation,
                MdLightMode: MdLightMode,
              };
              const IconComponent = iconComponents[data.nav__icon];

              return (
                <HashLink
                  className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    if (index === 6) {
                      console.log('you clicked.. ');
                      toggleTheme();
                      return;
                    }
                    if (index === 3 || index === 4) {
                      if (csStyleData.length === 0) {
                        getStyleData(process.env.REACT_APP_ARP_CS);
                      }
                    }

                    if (data.another_page === true)
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                    setActive(false);
                    setBtnActive(false);
                    setBtnClick(index);
                  }}
                >
                  <span
                    id="navIcons"
                    style={{
                      alignItems: 'center',
                      paddingBottom: '1px',
                      width: '39px',
                      height: '39px',
                      display: index === 6 ? 'flex' : 'none',
                    }}
                  >
                    {index === 6 && isDarkMode ? (
                      <MdNightlight />
                    ) : (
                      <IconComponent />
                    )}
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
        <div className="toggle_menu_icons">
          <span onClick={() => toggleTheme()} style={{ display: 'flex' }}>
            {isDarkMode ? <MdNightlight /> : <MdNightlight />}
          </span>
          <i
            className={isActive ? 'fas fa-times' : 'fas fa-bars-staggered'}
            style={{
              fontSize: '21px',
              fontWeight: '600',

              width: '27px',
            }}
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
