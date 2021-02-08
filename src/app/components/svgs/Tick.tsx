import React from 'react';

interface Props {
  props?: any;
}

const Tick: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12L9.62739 19L21 6.988L19.1311 5L9.62739 15.038L4.85567 10.04L3 12Z" fill="#2B2F51" />
  </svg>
);

export default Tick;
