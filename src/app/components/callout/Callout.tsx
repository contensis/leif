import React from 'react';
import CalloutStyled from './Callout.styled';
export interface Props {
  className?: string;
  type?: 'success' | 'warning' | 'note';
  title?: string;
  text: string;
}

const Callout = ({ className, type = 'success', title, text }: Props) => {
  if (!text) return null;
  return (
    <CalloutStyled type={type} className={className}>
      {title && <span className="callout__title">{title}</span>}
      <span
        className="callout__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </CalloutStyled>
  );
};

export default Callout;
