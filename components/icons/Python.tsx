import React from 'react';

const Python = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient
        id="python__a-python"
        x1="3.075"
        x2="18.898"
        y1="2.782"
        y2="18.658"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="python__b-python"
        x1="12.809"
        x2="29.803"
        y1="12.882"
        y2="29.163"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE052" />
        <stop offset="1" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path
      fill="url(#python__a-python)"
      d="M15.885 0c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H5.197S0 7.678 0 15.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175V4.247S24.374 0 15.885 0zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
    />
    <path
      fill="url(#python__b-python)"
      d="M16.115 31.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H15.97v-1.095h10.832S32 24.155 32 15.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537H8.132s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
    />
  </svg>
);

export default Python;