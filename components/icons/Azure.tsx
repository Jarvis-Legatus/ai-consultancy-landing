import React from 'react';

const Azure = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        id="azure__a-azure"
        x1="-1032.17"
        x2="-1059.21"
        y1="145.31"
        y2="65.43"
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#114a8b" />
        <stop offset="1" stopColor="#0669bc" />
      </linearGradient>
      <linearGradient
        id="azure__b-azure"
        x1="-1023.73"
        x2="-1029.98"
        y1="108.08"
        y2="105.97"
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopOpacity=".3" />
        <stop offset=".07" stopOpacity=".2" />
        <stop offset=".32" stopOpacity=".1" />
        <stop offset=".62" stopOpacity=".05" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="azure__c-azure"
        x1="-1027.16"
        x2="-997.48"
        y1="147.64"
        y2="68.56"
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3ccbf4" />
        <stop offset="1" stopColor="#2892df" />
      </linearGradient>
    </defs>
    <path
      d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"
      fill="url(#azure__a-azure)"
    />
    <path
      d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"
      fill="#0078d4"
    />
    <path
      d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"
      fill="url(#azure__b-azure)"
    />
    <path
      d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"
      fill="url(#azure__c-azure)"
    />
  </svg>
);

export default Azure;
