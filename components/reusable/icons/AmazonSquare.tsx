import { SVGProps } from 'react';

const AmazonSquare = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={81}
        height={81}
      >
        <rect width={81} height={81} rx={11} fill="#000" />
      </mask>
      <g mask="url(#a)">
        <rect width={81} height={81} rx={11} fill="#000" />
      </g>
      <path
        d="M59.044 57.367c-20.24 9.633-32.8 1.574-40.842-3.322-.497-.308-1.343.073-.61.915 2.68 3.248 11.459 11.077 22.918 11.077 11.467 0 18.288-6.257 19.142-7.348.847-1.082.249-1.68-.608-1.322zm5.684-3.139c-.543-.708-3.304-.84-5.042-.626-1.741.207-4.354 1.27-4.127 1.91.117.239.355.132 1.55.024 1.2-.12 4.558-.543 5.258.371.704.922-1.07 5.31-1.395 6.018-.313.708.12.89.708.419.58-.471 1.63-1.691 2.335-3.419.7-1.736 1.126-4.158.713-4.697z"
        fill="#F90"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.435 37.712c0 2.528.064 4.636-1.214 6.88-1.03 1.825-2.664 2.947-4.489 2.947-2.49 0-3.941-1.898-3.941-4.699 0-5.53 4.954-6.533 9.644-6.533v1.405zm6.542 15.813c-.429.383-1.05.41-1.533.155-2.153-1.788-2.536-2.618-3.722-4.325-3.559 3.632-6.077 4.718-10.694 4.718-5.457 0-9.709-3.367-9.709-10.11 0-5.265 2.856-8.851 6.917-10.603 3.522-1.551 8.44-1.825 12.2-2.253v-.84c0-1.542.118-3.367-.786-4.7-.794-1.194-2.308-1.687-3.64-1.687-2.473 0-4.681 1.268-5.22 3.896-.11.584-.538 1.159-1.122 1.186l-6.296-.675c-.529-.119-1.113-.547-.967-1.36C28.856 19.3 35.745 17 41.913 17c3.157 0 7.281.84 9.772 3.23 3.157 2.947 2.856 6.88 2.856 11.16V41.5c0 3.038 1.26 4.37 2.445 6.012.42.584.511 1.287-.018 1.724a273.797 273.797 0 00-4.973 4.307l-.018-.018"
        fill="#000"
      />
      <path
        d="M59.044 57.367c-20.24 9.633-32.8 1.574-40.842-3.322-.497-.308-1.343.073-.61.915 2.68 3.248 11.459 11.077 22.918 11.077 11.467 0 18.288-6.257 19.142-7.348.847-1.082.249-1.68-.608-1.322zm5.684-3.139c-.543-.708-3.304-.84-5.042-.626-1.741.207-4.354 1.27-4.127 1.91.117.239.355.132 1.55.024 1.2-.12 4.558-.543 5.258.371.704.922-1.07 5.31-1.395 6.018-.313.708.12.89.708.419.58-.471 1.63-1.691 2.335-3.419.7-1.736 1.126-4.158.713-4.697z"
        fill="#F90"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.435 37.712c0 2.528.064 4.636-1.214 6.88-1.03 1.825-2.664 2.947-4.489 2.947-2.49 0-3.941-1.898-3.941-4.699 0-5.53 4.954-6.533 9.644-6.533v1.405zm6.542 15.813c-.429.383-1.05.41-1.533.155-2.153-1.788-2.536-2.618-3.722-4.325-3.559 3.632-6.077 4.718-10.694 4.718-5.457 0-9.709-3.367-9.709-10.11 0-5.265 2.856-8.851 6.917-10.603 3.522-1.551 8.44-1.825 12.2-2.253v-.84c0-1.542.118-3.367-.786-4.7-.794-1.194-2.308-1.687-3.64-1.687-2.473 0-4.681 1.268-5.22 3.896-.11.584-.538 1.159-1.122 1.186l-6.296-.675c-.529-.119-1.113-.547-.967-1.36C28.856 19.3 35.745 17 41.913 17c3.157 0 7.281.84 9.772 3.23 3.157 2.947 2.856 6.88 2.856 11.16V41.5c0 3.038 1.26 4.37 2.445 6.012.42.584.511 1.287-.018 1.724a273.797 273.797 0 00-4.973 4.307l-.018-.018"
        fill="#FDFDFD"
      />
    </svg>
  );
};

export default AmazonSquare;
