import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19px"
      height="20px"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.32 9.646a.199.199 0 010-.28l7.334-7.332a1.188 1.188 0 10-1.681-1.68L9.64 7.684a.198.198 0 01-.28 0L2.028.354a1.188 1.188 0 10-1.68 1.68l7.331 7.332a.198.198 0 010 .28L.348 16.98a1.187 1.187 0 101.68 1.679l7.332-7.334a.197.197 0 01.28 0l7.333 7.334a1.188 1.188 0 001.68-1.68L11.32 9.647z"
        fill="#000009"
      />
    </svg>
  );
};

export default CloseIcon;
