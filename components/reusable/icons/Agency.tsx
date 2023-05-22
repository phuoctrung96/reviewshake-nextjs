import { SVGProps } from 'react';

const Agency = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_1740_11209)"
        stroke="#25E85F"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.75 19.25h16.5M8.25 7.334h.917M8.25 11h.917M8.25 14.666h.917M12.833 7.334h.917M12.833 11h.917M12.833 14.666h.917M4.583 19.25V4.583A1.833 1.833 0 016.416 2.75h9.167a1.833 1.833 0 011.833 1.833V19.25" />
      </g>
      <defs>
        <clipPath id="clip0_1740_11209">
          <path fill="#fff" d="M0 0H22V22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Agency;
