import { SVGProps } from 'react';

const Enterprise = (props: SVGProps<SVGSVGElement>) => {
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
        clipPath="url(#clip0_273_3011)"
        stroke="#6D696A"
        strokeWidth={2.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 24.5h21M5.832 24.5V8.167L15.165 3.5v21M22.168 24.5V12.832l-7-4.667M10.5 10.5v.012M10.5 14v.012M10.5 17.5v.012M10.5 21v.012" />
      </g>
      <defs>
        <clipPath id="clip0_273_3011">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Enterprise;
