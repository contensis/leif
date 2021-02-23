import React from 'react';

interface Props {
  props?: any;
}

const Calendar = (props:Props) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clipRule="evenodd" d="M0.752014 5.25C0.752014 4.42157 1.42359 3.75 2.25201 3.75H21.752C22.5804 3.75 23.252 4.42157 23.252 5.25V21.75C23.252 22.5784 22.5804 23.25 21.752 23.25H2.25201C1.42359 23.25 0.752014 22.5784 0.752014 21.75V5.25Z" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.752014 9.75H23.252" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.75201 6V0.75" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.252 6V0.75" stroke="#2B2F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Calendar;
