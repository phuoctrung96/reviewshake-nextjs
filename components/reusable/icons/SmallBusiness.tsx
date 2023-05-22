import { SVGProps } from 'react';

const SmallBusiness = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_273_2990)"
        stroke="#6D696A"
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 24.5h21M17.5 9.333a3.5 3.5 0 107 0V8.167h-21L5.833 3.5h16.334L24.5 8.167m-21 0v1.166a3.5 3.5 0 007 0V8.167h-7zm7 1.166a3.5 3.5 0 107 0V8.167l-7 1.166zM5.833 24.5V12.658M22.167 24.5V12.658M10.5 24.5v-4.667a2.333 2.333 0 012.333-2.333h2.334a2.333 2.333 0 012.333 2.333V24.5" />
      </g>
      <defs>
        <clipPath id="clip0_273_2990">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SmallBusiness;
