import React from 'react';

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

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.type
 */

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
    case 'arrowRight':
    case 'arrowLeft':
    case 'arrow':
      return (
        <IconStyled
          className={className}
          transform={type === 'arrowRight' ? 'scale(-1,1)' : ''}
          as={Arrow}
        />
      );
    default:
      return null;
  }
};

export default Icon;
