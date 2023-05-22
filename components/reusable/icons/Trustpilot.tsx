import { SVGProps } from 'react';

const Trustpilot = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={28}
      height={26}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 9.909H17.656L14.472.074 11.27 9.91.926 9.89l8.365 6.086-3.203 9.835 8.365-6.086 8.366 6.085-3.184-9.834L28 9.909z"
        fill="#00B67A"
      />
      <path d="M20.35 18.199l-.716-2.223-5.162 3.749 5.878-1.526z" fill="#005128" />
    </svg>
  );
};

export default Trustpilot;
