// components/CameraIcon.js
import React from 'react';

function CameraIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-camera"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7h4l2 -2h4l2 2h4a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

export default CameraIcon;
