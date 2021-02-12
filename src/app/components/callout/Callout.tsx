import React from 'react';
import CalloutStyled from './Callout.styled';

interface Props {
  type: 'success' | 'error' | 'information';
  title: string;
  text?: string;
}

const Callout = ({ type, title, text }: Props) => {
  return (
    <CalloutStyled type={type}>
      <span className="callout__title">{title}</span>
      {text && <p className="callout__text">{text}</p>}
    </CalloutStyled>
  );
};

export default Callout;
