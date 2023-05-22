import { SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={7}
      height={11}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1715_5559)">
        <path
          d="M3.5 8.855a.671.671 0 01-.505-.228L.134 5.375a.539.539 0 01.809-.712l2.502 2.844a.073.073 0 00.11 0l2.502-2.844a.539.539 0 11.809.712L4.005 8.626a.674.674 0 01-.505.229z"
          fill="#000009"
        />
      </g>
      <defs>
        <clipPath id="clip0_1715_5559">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H7V10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDownIcon;
