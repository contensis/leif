import React from 'react';

import GenericHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
export interface Props {
  className?: string;
  title: string;
  image?: any;
  link?: any;
  type?: 'default' | 'center';
}

const GenericHero = ({ className, title, image, link, type = "default" }: Props) => {
  return (
    <GenericHeroStyled className={className} type={type}>
      <div className="generic-hero__content">
        {link && (
          <BackButton className="generic-hero__back" label={link.label} />
        )}
        <h1 className="generic-hero__title">{title}</h1>
      </div>
      {image && <Image image={image} className="generic-hero__image" />}
    </GenericHeroStyled>
  );
};

export default GenericHero;
