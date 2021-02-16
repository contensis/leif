import React from 'react';

import BlogHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
interface Props {
  className?: string;
  title: string;
  image?: any;
}

const BlogHero = ({ className, title, image }: Props) => {
  return (
    <BlogHeroStyled className={className}>
      <div>
        <BackButton className="generic-hero__back" label="Blogs" />
        <h1 className="generic-hero__title">{title}</h1>
      </div>
      {image && (
        <Image image={image} className="generic-hero__image" />
      )}
    </BlogHeroStyled>
  );
};

export default BlogHero;
