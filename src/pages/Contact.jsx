import React from "react";
import "./Contact";
import "./Contact.css";
import contact_img from "../Image/contact_me_img.png";
function Contact() {
  return (
    <div>
      <div className="contact_page_section" id="contact_page">
        <div className="contact_section">
          <div className="contact_container">
            <div className="form_container_left">
              <h2>Contact Me</h2>
              <div className="your_location">
                <i class="fas fa-light fa-location-dot"></i>
                <address>Behind jayshree garden jalochi Baramati.</address>
              </div>
              <div className="your_email">
                <i class="fas fa-light fa-envelope"></i>
                <p>ganrajp036956@gmail.com</p>
              </div>
            </div>
            <div className="form_container_right">
              <div className="user_form">
                <form className="user_message_form">
                  <h2>Love to hear from you.</h2>
                  <h3>Get in Touch</h3>
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
                    <button className="submit_msg">Submit</button>
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
