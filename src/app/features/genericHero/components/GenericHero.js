import React from 'react';

import BlogHeroStyled from '../components.styled/GenericHero.styled';
import hero from '../assets/women-at-desk.png';

import { BackButton } from '../../button';
// import Image from '~/features/image';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {object} props.image
 */

const BlogHero = ({ className, title /*, image */ }) => {
  return (
    <BlogHeroStyled className={className}>
      <div>
        <BackButton className="ghBack" label="Blogs" />
        <h1 className="ghTitle">{title}</h1>
      </div>
      {/* <Image /> */}
      <img src={hero} alt="Women at desk" className="ghImage" />
    </BlogHeroStyled>
  );
};

export default BlogHero;
