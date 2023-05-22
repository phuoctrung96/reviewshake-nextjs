import { SVGProps } from 'react';

const FacebookLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1750_9608)">
        <path
          d="M23.61.007L19.528 0c-4.587 0-7.55 3.041-7.55 7.748v3.572H7.871a.642.642 0 00-.642.642v5.176c0 .354.288.642.642.642h4.105v13.06c0 .354.287.642.642.642h5.355a.642.642 0 00.642-.642V17.78h4.8a.642.642 0 00.642-.642l.002-5.176a.643.643 0 00-.643-.642h-4.8V8.292c0-1.456.346-2.195 2.242-2.195h2.75a.642.642 0 00.642-.643V.648a.642.642 0 00-.641-.641z"
          fill="#0C88EF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1750_9608">
          <path fill="#fff" d="M0 0H31.4818V31.4815H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookLogo;
