import React, { useState } from 'react';

// Style
import SignupFormStyled from './SignupForm.styled';

// Components
import Input from '../input/Input';
import Callout from '../callout/Callout';
import Button from '../button/Button';

export interface Props {
  className?: string;
}

const SignupForm = ({ className }: Props) => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  return (
    <SignupFormStyled
      className={className}
      onSubmit={e => {
        e.preventDefault();
        setHasSubmitted(true);
      }}
    >
      <span className="form__title">Sign up</span>
      {!hasSubmitted && (
        <>
          <Input label="First name" id="firstname" placeholder="Jane" />
          <Input label="Last name" id="lastname" placeholder="Doe" />
          <Input label="Email" id="email" placeholder="example@email.com" />
          <Button
            label="Sign up"
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
          title="Thank you for signing up."
          text="We'll send you a confirmation email shortly as well as your 20% off voucher."
        />
      )}
    </SignupFormStyled>
  );
};

export default SignupForm;
