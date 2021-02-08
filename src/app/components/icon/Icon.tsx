import React from 'react';

import IconStyled from './Icon.styled';

import Arrow from '../svgs/Arrow';
import Chevron from '../svgs/Chevron';
import Cross from '../svgs/Cross';
import Facebook from '../svgs/Facebook';
import LinkedIn from '../svgs/LinkedIn';
import Link from '../svgs/Link';
import Pot from '../svgs/Pot';
import Search from '../svgs/Search';
import Star from '../svgs/Star';
import Tag from '../svgs/Tag';
import Twitter from '../svgs/Twitter';
import Minus from '../svgs/Minus';
import Plus from '../svgs/Plus';
import Kebab from '../svgs/Kebab';
import Plant from '../svgs/Plant';
import Sort from '../svgs/Sort';
import Tick from '../svgs/Tick';

interface Props {
  className?: string;
  type: string;
}

const Icon: React.FC<Props> = ({ className, type }) => {
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
    case 'chevron':
    case 'chevronDown':
    case 'chevronUp':
    case 'chevronLeft':
    case 'chevronRight':
      return (
        <IconStyled
          className={className}
          as={Chevron}
          transform={
            type === 'chevronUp'
              ? 'scale(1,-1)'
              : type === 'chevronLeft'
              ? 'rotate(90)'
              : type === 'chevronRight'
              ? 'rotate(-90)'
              : ''
          }
        />
      );
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
    case 'minus':
      return <IconStyled className={className} as={Minus} />;
    case 'plus':
      return <IconStyled className={className} as={Plus} />;
    case 'kebab':
      return <IconStyled className={className} as={Kebab} />;
    case 'plant':
      return <IconStyled className={className} as={Plant} />;
    case 'sort':
      return <IconStyled className={className} as={Sort} />;
    case 'tick':
      return <IconStyled className={className} as={Tick} />;
    default:
      return null;
  }
};

export default Icon;
