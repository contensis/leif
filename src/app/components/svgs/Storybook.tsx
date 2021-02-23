import React from 'react';

interface Props {
  props?: any;
}

const Storybook = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0)">
      <path d="M3.25 3V21.3C3.25999 21.8283 3.47929 22.3311 3.85973 22.6979C4.24018 23.0646 4.75065 23.2654 5.279 23.256H19.485C19.749 23.26 20.0039 23.1595 20.1941 22.9762C20.3843 22.793 20.4942 22.542 20.5 22.278V6.753C20.5 6.35518 20.342 5.97364 20.0607 5.69234C19.7794 5.41104 19.3978 5.253 19 5.253H18.25" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 5.253H5.5C5.20428 5.253 4.91145 5.1947 4.63827 5.08144C4.36509 4.96818 4.11692 4.80218 3.90795 4.59293C3.69898 4.38368 3.53331 4.13529 3.42041 3.86196C3.30751 3.58863 3.24961 3.29572 3.25 3C3.2508 2.40378 3.4882 1.83226 3.91007 1.41095C4.33194 0.989639 4.90378 0.752998 5.5 0.752998H17.5C17.8978 0.752998 18.2794 0.911034 18.5607 1.19234C18.842 1.47364 19 1.85517 19 2.253V5.253Z" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 12.003L9.25 14.253L7 16.503" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.087 14.253H16" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>  
);

export default Storybook;
