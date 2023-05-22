import { SVGProps } from 'react';

const FeatureCheck = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.712 0H1.288A1.29 1.29 0 000 1.288v17.424A1.29 1.29 0 001.288 20h17.424A1.289 1.289 0 0020 18.712V1.288A1.289 1.289 0 0018.712 0zm-3.041 6.537l-5.833 7.916a.845.845 0 01-1.192.156l-4.167-3.333a.833.833 0 111.042-1.301l3.489 2.792 5.323-7.22a.834.834 0 011.342.989h-.004z"
        fill="#000009"
      />
    </svg>
  );
};

export default FeatureCheck;
