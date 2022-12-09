import React from "react";
import "./Education.css";
import educ_img from "../../Image/contact_me_img.png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: educ_img,
      college_name: "D.Y. Patil College of Engineering",
      college_degree_name: "B.E. in Information Technology",
      education_spam: "2020-Present",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Ml , OS etc.",
        },
        {
          index: 2,
          educ_info:
            "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        },
        {
          index: 3,
          educ_info: "",
        },
      ],
      btn_name: "Visit Website",
      btn_link: "",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="upper_left">
                    <img src={data.education_logo_link} alt="college logo" />
                  </div>
                  <div className="upper_middle">
                    <h2>{data.college_name}</h2>
                    <h4>{data.college_degree_name}</h4>
                  </div>
                  <div className="upper_right">
                    <h5>{data.education_spam}</h5>
                  </div>
                </div>

                <div className="educ_lower_section">
                  {data.education_info.map((indata, index) => {
                    return (
                      <div className="educ_data_info" key={index}>
                        <p>{indata.educ_info}</p>
                      </div>
                    );
                  })}
                  <div className="educ_btn">
                    <button src={data.btn_link}>{data.btn_name}</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
