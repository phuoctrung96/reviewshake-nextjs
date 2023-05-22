import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <g clipPath="url(#clip0_1712_6134)">
        <path
          d="M26.581 23.563l.472-3.077h-2.952v-1.997c0-.841.413-1.662 1.735-1.662h1.342v-2.62S25.96 14 24.795 14c-2.43 0-4.02 1.474-4.02 4.141v2.345h-2.702v3.076h2.702V31h3.326v-7.438h2.48z"
          fill="#2B2B59"
        />
      </g>
      <defs>
        <clipPath id="clip0_1712_6134">
          <path fill="#fff" transform="translate(17.313 14)" d="M0 0H10.625V17H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
