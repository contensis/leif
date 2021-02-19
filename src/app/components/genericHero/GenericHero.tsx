import React from 'react';

import BlogHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
export interface Props {
  className?: string;
  title: string;
  image?: any;
  link?: any;
}

const BlogHero = ({ className, title, image, link }: Props) => {
  return (
    <BlogHeroStyled className={className}>
      <div>
        {link && <BackButton className="generic-hero__back" label={link.label} />}
        <h1 className="generic-hero__title">{title}</h1>
      </div>
      {image && (
        <Image image={image} className="generic-hero__image" />
      )}
    </BlogHeroStyled>
  );
};

export default BlogHero;
