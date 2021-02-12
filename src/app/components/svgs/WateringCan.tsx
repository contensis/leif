import React from 'react';

interface Props {
  props?: any;
}

const WateringCan = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.25 21H8.25C7.85218 21 7.47064 20.842 7.18934 20.5607C6.90804 20.2794 6.75 19.8978 6.75 19.5V7.5C6.75 6.30653 7.22411 5.16193 8.06802 4.31802C8.91193 3.47411 10.0565 3 11.25 3H12.75L13.824 7.3C13.9465 7.78604 14.2278 8.21724 14.6233 8.52521C15.0188 8.83318 15.5058 9.00028 16.007 9H18.75V19.5C18.75 19.8978 18.592 20.2794 18.3107 20.5607C18.0294 20.842 17.6478 21 17.25 21Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.751 13.447C20.0634 13.2556 21.2547 12.5746 22.0856 11.5409C22.9166 10.5072 23.3256 9.19735 23.2305 7.87449C23.1354 6.55163 22.5433 5.31376 21.573 4.40955C20.6027 3.50533 19.3263 3.00176 18 3H12.75" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.75 8.25L3.75 6" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.75 15.75L2.105 7.234" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
);

export default WateringCan;
