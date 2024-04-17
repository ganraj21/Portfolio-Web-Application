import React from 'react';
import './Skeleton.css';

const Skeleton = ({ className, props }) => {
  return (
    <>
      <div
        class={`animated-background ${className}`}
        style={{ width: props.width, height: props.height }}
      >
        <div class="background-masker btn-divide-left"></div>
      </div>
    </>
  );
};

export default Skeleton;
