import React from 'react';
import PropTypes from 'prop-types';

import IconStyled from '../components.styled/Icon.styled';

import {
  Facebook,
  Twitter,
  LinkedIn,
  Link,
  Search,
  Pot,
  Cross,
  Tag,
  Star,
  Arrow,
} from '../svgs';

const Icon = ({ className, type }) => {
  switch (type) {
    case 'facebook':
      return <IconStyled className={className} as={Facebook} />;
    case 'twitter':
      return <IconStyled className={className} as={Twitter} />;
    case 'linkedin':
      return <IconStyled className={className} as={LinkedIn} />;
    case 'link':
      return <IconStyled className={className} as={Link} />;
    case 'pot':
      return <IconStyled className={className} as={Pot} />;
    case 'search':
      return <IconStyled className={className} as={Search} />;
    case 'cross':
      return <IconStyled className={className} as={Cross} />;
    case 'tag':
      return <IconStyled className={className} as={Tag} />;
    case 'star':
      return <IconStyled className={className} as={Star} />;
    case 'arrow':
      return <IconStyled className={className} as={Arrow} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
