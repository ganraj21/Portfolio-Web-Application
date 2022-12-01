import React from "react";
import "./Contact.css";
import contact_me_img from "../Image/contact_me_imgs.png";
function Contact() {
  return (
    <div>
      <div className="contact_page_section" id="contact_page">
        <div className="contact_section">
          <div className="contact_container">
            <div className="form_container_left">
              <h2>Contact Me</h2>

              <div className="your_info_img">
                <img src={contact_me_img} alt="" />
              </div>
            </div>
            <div className="form_container_right">
              <div className="user_form">
                <form className="user_message_form">
                  <h3>
                    Get in <span> Touch </span>
                  </h3>
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
