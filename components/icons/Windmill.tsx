import React from 'react';

const Windmill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      {/* 
        The original SVG used CSS classes (.st2, .st3) defined in a <style> tag.
        In React, we apply these styles directly as 'fill' attributes.
        .st2 -> fill="#BCD4FC"
        .st3 -> fill="#3B82F6"
      */}
      <polygon
        fill="#BCD4FC"
        points="134.78,14.22 114.31,48.21 101.33,69.75 158.22,69.75 177.97,36.95 191.67,14.22"
      />
      <polygon
        fill="#3B82F6"
        points="227.55,69.75 186.61,69.75 101.33,69.75 129.78,119.02 158.16,119.02 228.61,119.02 256,119.02"
      />
      <polygon
        fill="#3B82F6"
        points="136.93,132.47 116.46,167.93 73.82,241.78 130.71,241.78 144.9,217.2 180.13,156.18 193.82,132.46"
      />
      <polygon
        fill="#3B82F6"
        points="121.7,131.95 101.23,96.49 58.59,22.63 30.15,71.91 44.34,96.49 79.57,157.5 93.26,181.22"
      />
      <polygon
        fill="#BCD4FC"
        points="64.81,131.95 25.15,131.21 0,130.74 28.44,180.01 66.73,180.72 93.26,181.21"
      />
      <polygon
        fill="#BCD4FC"
        points="165.38,181.74 184.58,216.46 196.75,238.47 225.19,189.2 206.66,155.69 193.83,132.46"
      />
    </g>
  </svg>
);

export default Windmill;