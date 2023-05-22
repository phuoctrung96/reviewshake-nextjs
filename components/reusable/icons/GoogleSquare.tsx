import { SVGProps } from 'react';

const GoogleSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="68" height="68" rx="12" fill="url(#paint0_linear_2_256)" />
      <g clipPath="url(#clip0_2_256)">
        <path
          d="M48.6813 34.3375C48.6813 33.35 48.5938 32.4125 48.4438 31.5H34.3188V37.1375H42.4063C42.0438 38.9875 40.9813 40.55 39.4063 41.6125V45.3625H44.2313C47.0563 42.75 48.6813 38.9 48.6813 34.3375Z"
          fill="#4285F4"
        />
        <path
          d="M34.3189 49C38.3689 49 41.7564 47.65 44.2314 45.3625L39.4064 41.6125C38.0564 42.5125 36.3439 43.0625 34.3189 43.0625C30.4064 43.0625 27.0939 40.425 25.9064 36.8625H20.9314V40.725C23.3939 45.625 28.4564 49 34.3189 49Z"
          fill="#34A853"
        />
        <path
          d="M25.9063 36.8625C25.5938 35.9625 25.4313 35 25.4313 34C25.4313 33 25.6063 32.0375 25.9063 31.1375V27.275H20.9313C19.9063 29.3 19.3188 31.575 19.3188 34C19.3188 36.425 19.9063 38.7 20.9313 40.725L25.9063 36.8625Z"
          fill="#FBBC05"
        />
        <path
          d="M34.3189 24.9375C36.5314 24.9375 38.5064 25.7 40.0689 27.1875L44.3439 22.9125C41.7564 20.4875 38.3689 19 34.3189 19C28.4564 19 23.3939 22.375 20.9314 27.275L25.9064 31.1375C27.0939 27.575 30.4064 24.9375 34.3189 24.9375Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2_256"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFAFA" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
        <clipPath id="clip0_2_256">
          <rect width="30" height="30" fill="white" transform="translate(19 19)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoogleSquare;
