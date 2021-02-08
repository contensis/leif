import React from 'react';

interface Props {
  props?: any;
}

const Plus: React.FC<Props> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
      fill="#2B2F51"
    />
</svg>

);

export default Plus;
