import { SVGProps } from 'react';

const Play = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={49} cy={49} r={49} fill="#25E85F" />
      <path
        d="M65.5 46.402c2 1.155 2 4.041 0 5.196L43 64.588c-2 1.155-4.5-.288-4.5-2.598V36.01c0-2.31 2.5-3.753 4.5-2.599l22.5 12.99z"
        fill="#000009"
      />
    </svg>
  );
};

export default Play;
