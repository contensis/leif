import React, { useState } from 'react';

// Style
import SignupFormStyled from './SignupForm.styled';

// Components
import Input from '../input/Input';

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
      {!hasSubmitted && (
        <>
          <Input label="First name" id="firstname" placeholder="Jane" />
          <Input label="Last name" id="lastname" placeholder="Doe" />
          <Input label="Email" id="email" placeholder="example@email.com" />
          <button type="submit">Submit</button>
        </>
      )}
      {hasSubmitted && <h1>Thank you.</h1>}
    </SignupFormStyled>
  );
};

export default SignupForm;
