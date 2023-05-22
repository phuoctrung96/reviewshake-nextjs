import { SVGProps } from 'react';

const ArrowThick = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={9}
      height={10}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(.clip0_584_3866)">
        <path
          d="M8.85 5.192L5.177 1.554a.978.978 0 00-1.38.028.99.99 0 00-.025 1.384l1.452 1.392a.094.094 0 01-.065.162H.8a.855.855 0 00-.763.938c0 .306.168.941.75.941h4.38a.094.094 0 01.066.16l-1.399 1.4a.998.998 0 001.41 1.408l3.609-3.645a.375.375 0 00-.003-.53z"
          fill="#000"
        />
      </g>
    </svg>
  );
};

export default ArrowThick;
