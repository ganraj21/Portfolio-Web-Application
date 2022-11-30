import React from "react";

const social_media_data = [
  {
    index: 1,
    icon_class: "fas fa fa-facebook-square",
    where_to_go_link: "/",
  },
  {
    index: 2,
    icon_class: "fas fa fa-github",
    where_to_go_link: "https://github.com/ganraj21",
  },
  {
    index: 3,
    icon_class: "fas fa fa-instagram",
    where_to_go_link: "/",
  },
  {
    index: 4,
    icon_class: "fas fa fa-linkedin",
    where_to_go_link: "https://www.linkedin.com/in/ganesh-ghadge-a330a421a/",
  },
  {
    index: 5,
    icon_class: "fas fa fa-twitter",
    where_to_go_link: "https://twitter.com/ganraj_21",
  },
];
function SocialMediaLinks(props) {
  return (
    <>
      <div className="colz-icon">
        {social_media_data.map((data, index) => {
          return (
            <a
              href={data.where_to_go_link}
              key={index}
              style={{ margin: "6px", color: "#fff" }}
            >
              <i className={data.icon_class}></i>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default SocialMediaLinks;
