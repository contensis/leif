import React from 'react';

interface Props {
  props?: any;
}

const FullSize = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 2.998L3 20.998" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 8.398V2.998H15.6" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 15.598V20.998H8.4" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 2.998L21 20.998" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 8.398V2.998H8.4" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 15.598V20.998H15.6" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default FullSize;
