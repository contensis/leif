import React from 'react';

interface Props {
  props?: any;
}

const Arrow = (props:Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.25 12.497H0.75"
      stroke="#2B2F51"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 16.247L0.75 12.497L4.5 8.747"
      stroke="#2B2F51"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
