import React from 'react';
import PropTypes from 'prop-types';

import BlogHeroStyled from '../components.styled/GenericHero.styled';
import hero from '../assets/women-at-desk.png';

import { BackButton } from '../../button';

const BlogHero = ({ className, title /*, image */ }) => {
  // TODO:
  // Copy over <Image /> Component.
  return (
    <BlogHeroStyled className={className}>
      <div>
        <BackButton className="ghBack" label="Blogs" />
        <h1 className="ghTitle">{title}</h1>
      </div>
      <img src={hero} alt="Women at desk" className="ghImage" />
    </BlogHeroStyled>
  );
};

BlogHero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  // image: PropTypes.object,
};

export default BlogHero;
