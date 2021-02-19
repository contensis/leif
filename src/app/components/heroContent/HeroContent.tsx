import React from 'react';

import LinkButton from '../linkButton/LinkButton';
import HeroContentStyled from './HeroContent.styled';

interface Props {
  className?: string;
  title: string;
  text: string;
  cta: any;
  btnIcon: string;
}

const HeroContent = ({ className, title, text, cta, btnIcon }: Props) => {
  return (
    <HeroContentStyled className={className}>
      <h2 className="hero-content__title">{title}</h2>
      <p className="hero-content__text">{text}</p>
      {cta && <LinkButton className="hero-content__btn" icon={btnIcon} label={cta.label} href={cta.href} />}
    </HeroContentStyled>
  );
};

export default HeroContent;
