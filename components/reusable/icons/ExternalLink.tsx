import { SVGProps } from 'react';

const ExternalLink = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 8.083v3.5a1.167 1.167 0 01-1.167 1.167H2.917a1.167 1.167 0 01-1.167-1.167V5.167A1.167 1.167 0 012.917 4h3.5M8.75 2.25h3.5v3.5M5.833 8.667L12.25 2.25"
        stroke="#6D696A"
        strokeWidth={1.16667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalLink;
