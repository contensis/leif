import React from 'react';
import CalloutStyled from './Callout.styled';
export interface Props {
  className?: string;
  type: 'success' | 'error' | 'information';
  title: string;
  text?: string;
}

const Callout = ({ className, type, title, text }: Props) => {
  return (
    <CalloutStyled type={type} className={className}>
      <span className="callout__title">{title}</span>
      {text && <p className="callout__text">{text}</p>}
    </CalloutStyled>
  );
};

export default Callout;
