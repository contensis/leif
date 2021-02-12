import React from 'react';

import VisuallyHiddenStyled from './VisuallyHidden.styled';

interface Props {
  text?: string;
  children?: any;
}

const VisuallyHidden = ({ text, children }: Props) => {
  return (
    <VisuallyHiddenStyled>
      {text}
      {children}
    </VisuallyHiddenStyled>
  );
};

export default VisuallyHidden;
