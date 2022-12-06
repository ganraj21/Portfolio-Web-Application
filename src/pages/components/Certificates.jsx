import React from "react";
import "./Certificates.css";

function Certificates() {
  const my_certificates_data = [
    {
      index: 1,
      cert_title_name: "Young Professional",
      cert_provider_name: "TCS iON",
      cert_provider_img_link: "",
      cert_pdf_link: "",
    },
    {
      index: 2,
      cert_title_name: "Google Cloud Quest & Skill Badges",
      cert_provider_name: "Google Cloud",
      cert_provider_img_link: "",
      cert_pdf_link: "",
    },
    {
      index: 3,
      cert_title_name: "Certificate of Participation in Level 1: E-Commerce ",
      cert_provider_name: "Unstop (formerly Dare2Compete)",
      cert_provider_img_link: "",
      cert_pdf_link: "",
    },
    {
      index: 4,
      cert_title_name: "Node.js Essential Training",
      cert_provider_name: "LinkedIn",
      cert_provider_img_link: "",
      cert_pdf_link: "",
    },
    {
      index: 5,
      cert_title_name: "Learning npm the Node Package Manager",
      cert_provider_name: "LinkedIn",
      cert_provider_img_link: "",
      cert_pdf_link: "",
    },
  ];
  return (
    <>
      <div className="my_certificates_container">
        <div className="certificates_header_container">
          <h2>Certifications</h2>
          <div className="certificates_data_container">
            {my_certificates_data.map((data, index) => {
              return (
                <div className="cert_data_container" key={index}>
                  <img src={data.cert_pdf_link} alt="certificates" />
                  <div className="overlay_section">
                    <h3>{data.cert_title_name}</h3>
                    <h4>{data.cert_provider_name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;

// proj rest api
// {
//     index: 1,
//     cert_name: "",
//     cert_code_link: "",
//     cert_live_link: "",
//   },
