import { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={19}
      height={22}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.958 11.864h11.083M10.292 16.613l4.75-4.75M10.292 7.114l4.75 4.75"
        stroke="#3772FF"
        strokeWidth={1.58333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
