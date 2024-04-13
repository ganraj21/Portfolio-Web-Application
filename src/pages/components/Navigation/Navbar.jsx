import React, { useContext, useState } from 'react';
import { ServiceContext } from '../../../ServiceContext';
import { HashLink } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import nav_logo from '../../../Image/Profile_imgs/nav_logo.png';
import './Navbar.css';

const Navbar = () => {
  const { rootData, getStyleData, csStyleData } = useContext(ServiceContext);
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);
  const [isBtnClick, setBtnClick] = useState(0);

  const handleClick = () => {
    setActive(!isActive);
    setBtnActive(!isbtnActive);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <img src={nav_logo} alt="logo" />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links  ' : 'links'}>
          <div className="MenuItems ">
            {rootData?.my_navbar_data?.map((data, index) => {
              return (
                <HashLink
                  className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
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
                    style={{
                      height: '39px',
                      alignItems: 'center',
                      paddingBottom: '1px',
                    }}
                  >
                    <data.nav__icon />
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i
            className={isActive ? 'fas fa-times' : 'fas fa-bars-staggered'}
            style={{
              fontSize: '21px',
              fontWeight: '600',
              color: '#fff',
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
