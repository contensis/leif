import React from 'react';

interface Props {
  props?: any;
}

const Filter = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.4443 16.737H20.9999" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 16.737H7.77775" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fill-rule="evenodd" clipRule="evenodd" d="M13.4445 16.737C13.4445 18.3065 12.1763 19.5789 10.6116 19.5792C9.04698 19.5794 7.77833 18.3074 7.77786 16.7378C7.7774 15.1683 9.0453 13.8955 10.6099 13.8948C11.3616 13.8945 12.0826 14.1938 12.6142 14.7268C13.1459 15.2599 13.4445 15.983 13.4445 16.737V16.737Z" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.3333 7.26303H4" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fill-rule="evenodd" clipRule="evenodd" d="M21 7.26302C21 5.69349 19.7317 4.42107 18.167 4.42084C16.6024 4.4206 15.3337 5.69265 15.3333 7.26218C15.3328 8.83171 16.6007 10.1045 18.1654 10.1052C19.7304 10.1052 20.9993 8.83293 21 7.26302Z" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Filter;
