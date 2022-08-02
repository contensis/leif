import React from 'react';
import ContactForm from '../contactForm/ContactForm';
import SignupForm from '../signupForm/SignupForm';
import FormStyled from './FormStyled';

export interface Props {
  type?: string;
}

const Form = ({ type }: Props) => {
  const _RenderForm = (type: string) => {
    switch (type) {
      case 'Contact Us':
        return <ContactForm />;
      case 'Sign Up':
        return <SignupForm />;
      default:
        return;
    }
  };
  return <FormStyled>{_RenderForm(type)}</FormStyled>;
};

export default Form;
