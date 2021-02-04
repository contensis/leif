import React from 'react';

import BlogHeroStyled from './GenericHero.styled';
// import hero from './assets/women-at-desk.png';

import BackButton from '../backButton/BackButton';
// import Image from '~/features/image';

interface Props {
  className?: string,
  title: string,
}

const BlogHero: React.FC<Props> = ({ className, title /*, image */ }) => {
  return (
    <BlogHeroStyled className={className}>
      <div>
        <BackButton className="generic-hero__back" label="Blogs" />
        <h1 className="generic-hero__title">{title}</h1>
      </div>
      {/* <Image /> */}
      {/* <img src={hero} alt="Women at desk" className="generic-hero__image" /> */}
    </BlogHeroStyled>
  );
};

export default BlogHero;
