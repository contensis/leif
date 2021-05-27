import React, { useState } from 'react';

// Style
import ContactFormStyled from './ContactForm.styled';

// Components
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';

export interface Props {
  className?: string;
}

const ContactForm = ({ className }: Props) => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  return (
    <ContactFormStyled
      className={className}
      onSubmit={e => {
        e.preventDefault();
        setHasSubmitted(true);
      }}
    >
      {!hasSubmitted && (
        <>
          <Input label="Name" id="name" placeholder="Jane Doe" />
          <Input label="Email" id="email" placeholder="example@email.com" />
          <Textarea
            label="Message"
            id="message"
            placeholder="Type your message here..."
          />
          <button type="submit">Submit</button>
        </>
      )}
      {hasSubmitted && <h1>Thank you.</h1>}
    </ContactFormStyled>
  );
};

export default ContactForm;
