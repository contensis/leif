import React from 'react';

interface Props {
  props?: any;
}

const Code = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0)">
      <path d="M22.5 21.753C22.5 22.1508 22.342 22.5324 22.0607 22.8137C21.7794 23.095 21.3978 23.253 21 23.253H3C2.60218 23.253 2.22064 23.095 1.93934 22.8137C1.65804 22.5324 1.5 22.1508 1.5 21.753V2.253C1.5 1.85517 1.65804 1.47364 1.93934 1.19234C2.22064 0.911034 2.60218 0.752998 3 0.752998H18.045C18.4367 0.753044 18.8128 0.906296 19.093 1.18L22.048 4.062C22.1912 4.20181 22.3049 4.36887 22.3825 4.55331C22.4602 4.73776 22.5001 4.93588 22.5 5.136V21.753Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.295 9.003L18.045 12.753L14.295 16.503" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.79501 9.003L6.04501 12.753L9.79501 16.503" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default Code;
