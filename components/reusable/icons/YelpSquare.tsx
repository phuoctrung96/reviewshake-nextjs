import { SVGProps } from 'react';

const YelpSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={68}
      height={68}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={68} height={68} rx={12} fill="url(#paint0_linear_11_3)" />
      <g clipPath="url(#clip0_11_3)" fill="#fff">
        <path d="M42.797 27.077c1.226 1.014 4.59 3.796 4.042 5.748-.253.877-1.26 1.158-2.008 1.432a37.061 37.061 0 01-5.282 1.48c-1.453.295-4.556.939-3.98-1.63.225-.994 1.027-1.837 1.67-2.584 1.323-1.555 2.673-3.2 4.27-4.474a.55.55 0 01.424-.11.817.817 0 01.864.138zM40.988 47.577c-1.076-.87-1.836-2.234-2.494-3.426-.644-1.151-1.658-2.672-1.83-4.008-.349-2.748 3.632-1.096 4.776-.699 1.521.534 5.598 1.124 5.146 3.501-.377 1.94-2.714 4.303-4.666 4.604-.02.007-.048 0-.076 0l-.02.02c-.055.028-.117.063-.178.09-.233.123-.46.075-.658-.082zM32.088 40.506c2.165-.898 2.363 1.521 2.35 2.987a83.484 83.484 0 01-.206 5.242c-.048.705-.02 1.555-.692 2-.829.549-2.425.117-3.282-.15a.42.42 0 00-.082-.035c-1.802-.315-4.001-1.144-4.214-2.809a.635.635 0 01.172-.493c.055-.103.11-.199.171-.288.267-.37.576-.699.884-1.034a28.064 28.064 0 011.678-2.24c.864-1.042 1.926-2.646 3.22-3.18zM32.403 32.997c-3.159-2.597-6.235-6.619-7.825-10.34-1.212-2.83 1.87-4.556 4.248-5.337 3.207-1.055 4.481-.137 4.803 3.07.267 2.761.39 5.543.37 8.318-.007 1.171.322 3.062-.363 4.117.11.432-.541.74-.911.446-.055-.041-.11-.096-.172-.144a.658.658 0 01-.15-.13zM32.06 37.019c.254 1.123-.541 1.575-1.473 2-1.658.747-3.398 1.343-5.145 1.837-1.014.28-2.57.952-3.55.205-.74-.562-.787-1.733-.856-2.583-.15-1.898.137-6.427 2.768-6.619 1.288-.089 2.899 1.062 3.954 1.665 1.404.809 2.912 1.734 3.96 3.001a.718.718 0 01.342.494z" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_11_3"
          x1={34}
          y1={0}
          x2={34}
          y2={68}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D85358" />
          <stop offset={1} stopColor="#C1272D" />
        </linearGradient>
        <clipPath id="clip0_11_3">
          <path fill="#fff" transform="translate(16.903 16.903)" d="M0 0H34.097V34.097H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YelpSquare;
