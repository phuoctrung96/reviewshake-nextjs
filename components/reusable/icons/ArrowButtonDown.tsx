import { SVGProps } from 'react';

const ArrowButtonDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={9}
      height={10}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.8 1.62a.75.75 0 00-.652-.382H.853a.75.75 0 00-.641 1.138l3.647 6.026a.75.75 0 001.283 0l3.647-6.026a.75.75 0 00.012-.756z"
        fill="#66717E"
      />
    </svg>
  );
};

export default ArrowButtonDown;
