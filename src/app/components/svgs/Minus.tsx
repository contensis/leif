import React from 'react';

interface Props {
  props?: any;
}

const Minus: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 13H13H11H5V11H11H13H19V13Z"
      fill="#2B2F51"
    />
  </svg>
);

export default Minus;
