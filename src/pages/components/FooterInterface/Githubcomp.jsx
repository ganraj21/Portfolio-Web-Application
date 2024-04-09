import React from 'react';
import './Githubcomp.css';
/* eslint-disable react/jsx-no-target-blank */

/**
 * Safe link to own external websites only.
 */
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
        target="_blank"
      >
        ⭐ Star Me on Github
      </a>
    </div>
  );
}

export default Githubcomp;
