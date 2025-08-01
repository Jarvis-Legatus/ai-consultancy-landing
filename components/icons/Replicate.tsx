import React from 'react';

const Replicate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 726 726"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <clipPath id="replicate-clip0-1-3">
        <rect width="726" height="726" fill="#ffff" />
      </clipPath>
    </defs>
    <g clipPath="url(#replicate-clip0-1-3)">
      <path
        d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z"
        fill="currentColor"
      />
      <path
        d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z"
        fill="currentColor"
      />
      <path
        d="M726 0V82.1832H91.7664V726H0V0H726Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default Replicate;