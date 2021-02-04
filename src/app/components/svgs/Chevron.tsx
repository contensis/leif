import React from 'react';

interface Props {
  props?: any
}

const Chevron: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.293 9.293L12 13.586L7.70703 9.293L6.29303 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
      fill="#2B2F51"
    />
  </svg>
);

export default Chevron;
