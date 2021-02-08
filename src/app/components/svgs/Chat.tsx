import React from 'react';

interface Props {
  props?: any;
}

const Chat: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6667 18H11.3333L6 22V18H3.33333C2.59695 18 2 17.403 2 16.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H20.6667C21.403 2 22 2.59695 22 3.33333V16.6667C22 17.403 21.403 18 20.6667 18Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Chat;
