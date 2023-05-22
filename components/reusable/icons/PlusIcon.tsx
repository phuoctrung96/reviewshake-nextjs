import { SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 6C0 6.18234 0.0724328 6.3572 0.201364 6.48614C0.330295 6.61507 0.505164 6.6875 0.6875 6.6875H4.69792C4.72831 6.6875 4.75745 6.69957 4.77894 6.72106C4.80043 6.74255 4.8125 6.77169 4.8125 6.80208V10.8125C4.8125 10.9948 4.88493 11.1697 5.01386 11.2986C5.1428 11.4276 5.31766 11.5 5.5 11.5C5.68234 11.5 5.8572 11.4276 5.98614 11.2986C6.11507 11.1697 6.1875 10.9948 6.1875 10.8125V6.80208C6.1875 6.77169 6.19957 6.74255 6.22106 6.72106C6.24255 6.69957 6.27169 6.6875 6.30208 6.6875H10.3125C10.4948 6.6875 10.6697 6.61507 10.7986 6.48614C10.9276 6.3572 11 6.18234 11 6C11 5.81766 10.9276 5.6428 10.7986 5.51386C10.6697 5.38493 10.4948 5.3125 10.3125 5.3125H6.30208C6.27169 5.3125 6.24255 5.30043 6.22106 5.27894C6.19957 5.25745 6.1875 5.22831 6.1875 5.19792V1.1875C6.1875 1.00516 6.11507 0.830295 5.98614 0.701364C5.8572 0.572433 5.68234 0.5 5.5 0.5C5.31766 0.5 5.1428 0.572433 5.01386 0.701364C4.88493 0.830295 4.8125 1.00516 4.8125 1.1875V5.19792C4.8125 5.22831 4.80043 5.25745 4.77894 5.27894C4.75745 5.30043 4.72831 5.3125 4.69792 5.3125H0.6875C0.505164 5.3125 0.330295 5.38493 0.201364 5.51386C0.0724328 5.6428 0 5.81766 0 6H0Z"
        fill="#66717E"
      />
    </svg>
  );
};

export default PlusIcon;