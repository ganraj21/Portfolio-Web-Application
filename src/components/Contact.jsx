import React from "react";
import "./Contact";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="contact_page_section" id="contact_page">
        <div className="contact_section">
          <h2 className="ccp">This is contact page</h2>
          <div className="contact_container">
            <div className="form_container_left">
              <h2>Love to hare from you Get in touch</h2>
            </div>
            <div className="form_container_right">
              <div className="user_form">
                <form action="">
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
                  <div className="submit_msg">
                    <button>Submit</button>
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
