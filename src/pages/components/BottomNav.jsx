import React from "react";
import "./BottomNav.css";
function BottomNav() {
  return (
    <>
      <div className="bottom_nav_container">
        <div className="bottom_nav_section">
          <div className="bot_nav_left">
            <div className="bot_header">
              <h3>Ganraj21 Portfolio</h3>
            </div>
            <div className="bot_middle_info">
              <p className="basic_info">
                Need any help with your projects? contact me at the places
                mentioned below. I will try to get back to you as fast as I can.
              </p>
              <p className="f_info">Follow me for more such Projects.</p>
            </div>
          </div>
          <div className="bot_nav_middle"></div>
          <div className="bot_nav_right"></div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
