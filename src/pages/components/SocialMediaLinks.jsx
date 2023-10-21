import React from 'react';
import social_media_data from '../assets/SocialMData';
/* eslint-disable react/jsx-no-target-blank */

/**
 * Safe link to own external websites only.
 */
function SocialMediaLinks(props) {
  return (
    <>
      <div className="colz-icon">
        {social_media_data.map((data, index) => {
          return (
            <a
              href={data.where_to_go_link}
              key={index}
              target="_blank"
              style={{ margin: '6px', color: '#fff' }}
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
