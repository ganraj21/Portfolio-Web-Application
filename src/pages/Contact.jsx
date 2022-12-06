import React from "react";
import "./Contact.css";
import contact_me_img from "../Image/contact_me_imgs.png";
import Spinner from "./components/Spinner";
import { useState } from "react";
function Contact() {
  // const [btnColor, setBtnColor] = useState(true);
  const [userMsg, setUserMsg] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  const active_clr = [{ display: "none" }];
  const handleInputs = (event) => {
    setUserMsg({ ...userMsg, [event.target.name]: event.target.value });
  };
  const operator = (e) => {
    e.preventDefault();
    // document.getElementById("user_msg_btn").innerHTML = "none";
    setTimeout(() => {
      document.getElementById("your_spinner_d").style.display = "flex";

      console.log("you clicked on send btn");
    }, 5000);
  };
  return (
    <div>
      <div className="contact_page_section" id="contact_page">
        <div className="contact_section">
          <div className="contact_container">
            <div className="form_container_left">
              <div className="your_info_img">
                <img src={contact_me_img} alt="" />
              </div>
            </div>
            <div className="form_container_right">
              <div className="user_form">
                <form
                  className="user_message_form"
                  method="POST"
                  onSubmit={operator}
                >
                  <h3>
                    Get in <span> Touch </span>
                  </h3>
                  <p>We're open for any suggestions</p>
                  <div className="name_val">
                    <label htmlFor="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      value={userMsg.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="username_val">
                    <label htmlFor="name">Email-id</label>
                    <input
                      type="email"
                      name="email"
                      value={userMsg.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="user_msg">
                    <label htmlFor="msg">Message</label>
                    <textarea
                      name="text"
                      id="user_text_area"
                      cols="30"
                      rows="6"
                      value={userMsg.text}
                      onChange={handleInputs}
                    ></textarea>
                  </div>
                  <div className="user_send_msg_button">
                    <button className="submit_msg" id="user_msg_btn">
                      Send
                      <Spinner id="your_spinner_d" style={active_clr} />
                    </button>
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
