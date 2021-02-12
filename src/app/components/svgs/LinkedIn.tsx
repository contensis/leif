import React from 'react';

interface Props {
  props?: any;
}

const LinkedIn = (props:Props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 16H12.9231V10.3967C12.9231 8.85961 12.2715 8.00218 11.1031 8.00218C9.83154 8.00218 9.07692 8.89563 9.07692 10.3967V16H6V5.59243H9.07692V6.76288C9.07692 6.76288 10.0423 5 12.2177 5C14.3938 5 16 6.3818 16 9.24148C16 12.1004 16 16 16 16ZM1.50031 3C0.671513 3 0 2.32819 0 1.4997C0 0.671815 0.671513 0 1.50031 0C2.32849 0 3 0.671815 3 1.4997C3.00061 2.32819 2.32849 3 1.50031 3ZM0 16H3V6H0V16Z"
      fill="#2B2F51"
    />
  </svg>
);

export default LinkedIn;
