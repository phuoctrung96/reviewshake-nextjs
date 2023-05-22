import { SVGProps } from 'react';

const QuotationMarks = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={150}
      height={150}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1689_4386)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 12.3A4.3 4.3 0 0112.3 8h120.4a4.3 4.3 0 014.3 4.3v120.4a4.3 4.3 0 01-4.3 4.3H12.3a4.3 4.3 0 01-4.3-4.3V12.3zm58.683 37.553A27.253 27.253 0 0040.22 77.778v3.489a13.871 13.871 0 1013.87-13.87 12.937 12.937 0 00-3.13.394.702.702 0 01-.778-1.033 19.178 19.178 0 0116.502-9.886 3.509 3.509 0 000-7.018zm37.069 5.99a3.508 3.508 0 01-2.481 1.028 19.177 19.177 0 00-16.502 9.886.707.707 0 00.374 1.014c.13.046.27.053.404.019a12.947 12.947 0 013.132-.393 13.872 13.872 0 11-13.872 13.869v-3.489a27.255 27.255 0 0126.464-27.924 3.508 3.508 0 012.481 5.99z"
          fill="#25E85F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1689_4386"
          x={0.833334}
          y={0.833334}
          width={149.067}
          height={149.067}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2.86667} dy={2.86667} />
          <feGaussianBlur stdDeviation={5.01667} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0352941 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1689_4386" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1689_4386" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default QuotationMarks;
