import React, { useState } from 'react';

// Style
import ContactFormStyled from './ContactForm.styled';

// Components
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Callout from '../callout/Callout';
import Button from '../button/Button';

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
      <span className="form__title">Get in touch</span>
      {!hasSubmitted && (
        <>
          <Input label="Name" id="name" placeholder="Jane Doe" />
          <Input label="Email" id="email" placeholder="example@email.com" />
          <Textarea
            label="Message"
            id="message"
            placeholder="Type your message here..."
          />
          <Button
            label="Submit"
            type="submit"
            btnTheme="secondary"
            isHollow
            onClick={e => {
              e.preventDefault();
              setHasSubmitted(true);
            }}
          />
        </>
      )}
      {hasSubmitted && (
        <Callout
          type="note"
          title="Thank you, your message has been sent."
          text="You can expect a response from our team as soon as possible."
        />
      )}
    </ContactFormStyled>
  );
};

export default ContactForm;
