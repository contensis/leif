import React from 'react';
import ContactForm from '../contactForm/ContactForm';
import SignupForm from '../signupForm/SignupForm';

export interface Props {
  type: string;
}

const Form = ({ type }: Props) => {
  const _RenderForm = (type: string) => {
    switch (type) {
      case 'Contact':
        return <ContactForm />;
      case 'Sign Up':
        return <SignupForm />;
      default:
        return;
    }
  };
  return <>{_RenderForm(type)}</>;
};

export default Form;
