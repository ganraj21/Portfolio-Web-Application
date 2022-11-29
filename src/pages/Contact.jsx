import React from "react";
import "./Contact.css";
import SocialMediaLinks from "./components/SocialMediaLinks";
function Contact() {
  const contact_data = [
    {
      index: 1,
      icon_class: "fas fa-light fa-location-dot",
      info: "Behind jayshree garden jalochi Baramati.",
    },
    {
      index: 2,
      icon_class: "fas fa-light fa-envelope",
      info: "ganrajp036956@gmail.com",
    },
    {
      index: 3,
      icon_class: "fas fa-light fa-user",
      info: "Ganesh Ghadge",
    },
    {
      index: 4,
      icon_class: "fas fa-thin fa-mobile",
      info: "+91-8010844174",
    },
  ];
  return (
    <div>
      <div className="contact_page_section" id="contact_page">
        <div className="contact_section">
          <div className="contact_container">
            <div className="form_container_left">
              <h2>Contact Me</h2>

              <div className="your_info_data">
                {contact_data.map((data, index) => {
                  return (
                    <div className="contact_data_class">
                      <i className={data.icon_class} key={index}></i>
                      <p>{data.info}</p>
                    </div>
                  );
                })}
              </div>
              <SocialMediaLinks style={{ padding: "10px" }} />
            </div>
            <div className="form_container_right">
              <div className="user_form">
                <form className="user_message_form">
                  <h3>Get in Touch</h3>
                  <p>We're open for any suggestions</p>
                  <div className="name_val">
                    <label htmlFor="name">Name</label>
                    <input type="name" />
                  </div>
                  <div className="username_val">
                    <label htmlFor="name">Email-id</label>
                    <input type="email" />
                  </div>
                  <div className="user_msg">
                    <label htmlFor="msg">Message</label>
                    <textarea
                      name="text"
                      id="user_text_area"
                      cols="30"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="user_send_msg_button">
                    <button className="submit_msg">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
