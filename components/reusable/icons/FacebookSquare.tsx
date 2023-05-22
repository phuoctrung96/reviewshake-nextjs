import { SVGProps } from 'react';

const FacebookSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={68}
      height={68}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={0.0000610352} width={68} height={68} rx={12} fill="url(#paint0_linear_11_12)" />
      <g clipPath="url(#clip0_11_12)">
        <path
          d="M41.53 17.13l-4.393-.006c-4.936 0-8.125 3.272-8.125 8.337v3.843h-4.417a.69.69 0 00-.69.692v5.569c0 .382.309.69.69.69h4.417V50.31c0 .381.31.69.69.69h5.764a.69.69 0 00.69-.69V36.256h5.165a.69.69 0 00.69-.691l.002-5.57a.692.692 0 00-.69-.69h-5.167v-3.26c0-1.565.373-2.36 2.414-2.36l2.959-.001a.69.69 0 00.69-.691v-5.171a.69.69 0 00-.69-.691z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_11_12"
          x1={34}
          y1={0.0000610352}
          x2={34}
          y2={68.0001}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18AFFF" />
          <stop offset={1} stopColor="#0062DF" />
        </linearGradient>
        <clipPath id="clip0_11_12">
          <path fill="#fff" transform="translate(16.124 17.124)" d="M0 0H33.876V33.8756H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookSquare;
