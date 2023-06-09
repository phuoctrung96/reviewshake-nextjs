import { SVGProps } from 'react';

const Google = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={26}
      height={27}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1750_9616)">
        <path
          d="M25.614 14.16c0-.849-.076-1.656-.205-2.44H13.255v4.85h6.96c-.313 1.592-1.227 2.937-2.582 3.851v3.227h4.152c2.43-2.248 3.829-5.561 3.829-9.487z"
          fill="#4285F4"
        />
        <path
          d="M13.256 26.778c3.485 0 6.4-1.162 8.53-3.13l-4.152-3.227c-1.162.774-2.635 1.248-4.378 1.248-3.366 0-6.217-2.27-7.239-5.335h-4.28v3.323c2.118 4.217 6.475 7.12 11.52 7.12z"
          fill="#34A853"
        />
        <path
          d="M6.016 16.334a7.49 7.49 0 01-.409-2.464c0-.86.151-1.688.41-2.463V8.084H1.734a12.758 12.758 0 000 11.573l4.281-3.323z"
          fill="#FBBC05"
        />
        <path
          d="M13.256 6.072c1.904 0 3.604.656 4.948 1.936l3.679-3.678C19.656 2.243 16.74.963 13.256.963c-5.044 0-9.4 2.904-11.52 7.12l4.281 3.324c1.022-3.065 3.873-5.335 7.24-5.335z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_1750_9616">
          <path fill="#fff" transform="translate(.074 .963)" d="M0 0H25.8148V25.8148H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Google;
