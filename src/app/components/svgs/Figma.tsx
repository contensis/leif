import React from 'react';

interface Props {
  props?: any;
}

const Figma: React.FC<Props> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.5 22C10.432 22 12 20.432 12 18.5V15H8.5C6.568 15 5 16.568 5 18.5C5 20.432 6.568 22 8.5 22Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 12C5 10.344 6.568 9 8.5 9H12V15H8.5C6.568 15 5 13.656 5 12Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 5.5C5 3.568 6.568 2 8.5 2H12V9H8.5C6.568 9 5 7.432 5 5.5Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 2H15.5C17.432 2 19 3.568 19 5.5C19 7.432 17.432 9 15.5 9H12V2Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 12C19 13.656 17.432 15 15.5 15C13.568 15 12 13.656 12 12C12 10.344 13.568 9 15.5 9C17.432 9 19 10.344 19 12Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Figma;
