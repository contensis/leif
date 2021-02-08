import React from 'react';

interface Props {
  props?: any;
}

const Account: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.3888C15.2213 13.3888 17.8327 10.8394 17.8327 7.69442C17.8327 4.54948 15.2213 2 12 2C8.77874 2 6.16736 4.54948 6.16736 7.69442C6.16736 10.8394 8.77874 13.3888 12 13.3888Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 21.6716C19.6517 17.9478 16.0455 15.4582 12 15.4582C7.9545 15.4582 4.34834 17.9478 3 21.6716" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Account;
