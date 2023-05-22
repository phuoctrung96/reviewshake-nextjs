import { SVGProps } from 'react';

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={23} cy={23} r={23} fill="#E1E1E1" />
      <path
        d="M18.03 31h-3.733V18.983h3.732V31zM16.16 17.343c-1.193 0-2.161-.988-2.161-2.181a2.161 2.161 0 114.322 0c0 1.193-.968 2.181-2.16 2.181zM31.996 31h-3.724v-5.85c0-1.394-.028-3.182-1.94-3.182-1.94 0-2.238 1.515-2.238 3.082V31h-3.727V18.983h3.579v1.639h.052c.498-.944 1.715-1.94 3.53-1.94 3.778 0 4.472 2.486 4.472 5.717V31h-.004z"
        fill="#2B2B59"
      />
    </svg>
  );
};

export default LinkedInIcon;
