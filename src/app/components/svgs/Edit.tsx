import React from 'react';

interface Props {
  props?: any;
}

const Edit: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.1513 3.84817C19.0121 2.71382 17.169 2.71782 16.0346 3.85697C16.0282 3.86337 16.0218 3.86977 16.0154 3.87617L4.41594 15.4757L3 20.9994L8.52376 19.5827L20.1233 7.98319C21.2728 6.86004 21.2944 5.01852 20.1721 3.86897C20.1649 3.86177 20.1585 3.85537 20.1513 3.84817Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6845 4.20831L19.7915 8.31533" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.41699 15.475L8.52801 19.5788" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Edit;
