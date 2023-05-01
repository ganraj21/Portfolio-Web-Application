import React, { useState } from "react";
import "./Contact.css";
import contact_me_img from "../Image/contact_me_imgs.png";
import Spinner from "./components/Spinner";
import { BiLogInCircle } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const url = "https://port-web-app.onrender.com/user-message";
  const [pvalue, setPvalue] = useState(0);
  const [userMsg, setUserMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    theme: "dark",
  };
  const handleInputs = (event) => {
    setUserMsg({ ...userMsg, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { name, email, message } = userMsg;

    if (message.length < 5) {
      toast.error("Message is required", toastOptions);
      return false;
    } else if (name === "") {
      toast.error("Enter your name here.", toastOptions);
      return false;
    } else if (name.length < 2) {
      toast.error("Enter your full name", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  };
  const operator = async (e) => {
    e.preventDefault();
    const { name, email, message } = userMsg;
    const requestOptions = {
      name,
      email,
      message,
    };
    console.log(requestOptions);

    if (handleValidation()) {
      setPvalue(1);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestOptions),
      });

      const data = await res.json();

      if (data) {
        setPvalue(0);
      }
      console.log(data);
      toast.error(data.error, toastOptions);
      toast.success(data.message, toastOptions);
    }
  };

  return (
    <section className="contact_page_section" id="contact_page">
      <div className="contact_section">
        <div className="contact_container">
          <div className="form_container_left">
            <div className="user_form">
              <ToastContainer />
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
                    type="text"
                    name="name"
                    value={userMsg.name}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>
                <div className="username_val">
                  <label htmlFor="name">Email-id</label>
                  <input
                    type="email"
                    name="email"
                    value={userMsg.email}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>
                <div className="user_msg">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    id="user_text_area"
                    cols="30"
                    rows="6"
                    value={userMsg.message}
                    onChange={handleInputs}
                  ></textarea>
                </div>
                <div className="user_send_msg_button">
                  <button
                    className="submit_msg"
                    id="user_msg_btn"
                    disabled={pvalue !== 0}
                    style={{
                      background: pvalue !== 0 ? "#d2b3e5" : "",
                      border: pvalue !== 0 ? "#d2b3e5" : "",
                    }}
                  >
                    {pvalue ? (
                      <Spinner
                        id="your_spinner_d"
                        style={pvalue ? "flex" : "none"}
                      />
                    ) : (
                      <BiLogInCircle />
                    )}
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src={contact_me_img}
            className="form_container_right"
            alt="contact images"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Contact;
