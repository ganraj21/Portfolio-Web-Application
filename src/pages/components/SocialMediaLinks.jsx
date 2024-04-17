import React, { useContext } from 'react';
import { ServiceContext } from '../../ServiceContext';
/* eslint-disable react/jsx-no-target-blank */

/**
 * Safe link to own external websites only.
 */
const SocialMediaLinks = (props) => {
  const { rootData } = useContext(ServiceContext);
  return (
    <>
      <div className="colz-icon">
        {rootData?.social_media_data?.map((data, index) => {
          return (
            <a
              href={data.where_to_go_link}
              key={index}
              target="_blank"
              style={{ margin: '6px', color: '#f8e2ff' }}
            >
              <i className={data.icon_class}></i>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SocialMediaLinks;
