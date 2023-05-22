import { SVGProps } from 'react';

const MapPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.69766 17.234C3.93047 15.0605 0 9.79284 0 6.83398C0 3.24409 2.9101 0.333984 6.5 0.333984C10.0885 0.333984 13 3.24409 13 6.83398C13 9.79284 9.03906 15.0605 7.30234 17.234C6.88594 17.752 6.11406 17.752 5.69766 17.234ZM6.5 9.00065C7.69505 9.00065 8.66667 8.02904 8.66667 6.83398C8.66667 5.63893 7.69505 4.66732 6.5 4.66732C5.30495 4.66732 4.33333 5.63893 4.33333 6.83398C4.33333 8.02904 5.30495 9.00065 6.5 9.00065Z"
        fill="#66717E"
      />
    </svg>
  );
};

export default MapPinIcon;