import React from "react";
import "./Githubcomp.css";
function Githubcomp(props) {
  return (
    <div className="bot_btn">
      <a
        href={props.href}
        className="bot_git_btn"
        style={{
          backgroundColor: props.backgroundColor,
          boxShadow: props.shadow,
        }}
      >
        ⭐ Star Me on Github
      </a>
    </div>
  );
}

export default Githubcomp;
