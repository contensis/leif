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
import Account from '../svgs/Account';
import Basket from '../svgs/Basket';
import Block from '../svgs/Block';
import Calendar from '../svgs/Calendar';
import Chat from '../svgs/Chat';
import Clock from '../svgs/Clock';
import Cloudy from '../svgs/Cloudy';
import Code from '../svgs/Code';
import Delete from '../svgs/Delete';
import Edit from '../svgs/Edit';
import Figma from '../svgs/Figma';
import Filter from '../svgs/Filter';
import FullSize from '../svgs/FullSize';
import Humidity from '../svgs/Humidity';
import Information from '../svgs/Information';
import Leif from '../svgs/Leif';
import Location from '../svgs/Location';
import Play from '../svgs/Play';
import Product from '../svgs/Product';
import Question from '../svgs/Question';
import Storybook from '../svgs/Storybook';
import WateringCan from '../svgs/WateringCan';
import Wheelbarrow from '../svgs/Wheelbarrow';

interface Props {
  className?: string;
  type: string;
  hasDefaultStyles?: boolean;
}

const Icon = ({ className, type }: Props, props:any) => {
  const { ...rest } = props;
  switch (type) {
    case 'facebook':
      return <IconStyled {...rest} className={className} as={Facebook} />;
    case 'twitter':
      return <IconStyled {...rest} className={className} as={Twitter} />;
    case 'linkedin':
      return <IconStyled {...rest} className={className} as={LinkedIn} />;
    case 'link':
      return <IconStyled {...rest} className={className} as={Link} />;
    case 'pot':
      return <IconStyled {...rest} className={className} as={Pot} />;
    case 'search':
      return <IconStyled {...rest} className={className} as={Search} />;
    case 'cross':
      return <IconStyled {...rest} className={className} as={Cross} />;
    case 'tag':
      return <IconStyled {...rest} className={className} as={Tag} />;
    case 'star':
      return <IconStyled {...rest} className={className} as={Star} />;
    case 'minus':
      return <IconStyled {...rest} className={className} as={Minus} />;
    case 'plus':
      return <IconStyled {...rest} className={className} as={Plus} />;
    case 'kebab':
      return <IconStyled {...rest} className={className} as={Kebab} />;
    case 'plant':
      return <IconStyled {...rest} className={className} as={Plant} />;
    case 'sort':
      return <IconStyled {...rest} className={className} as={Sort} />;
    case 'tick':
      return <IconStyled {...rest} className={className} as={Tick} />;
    case 'account':
      return <IconStyled {...rest} className={className} as={Account} />;
    case 'basket':
      return <IconStyled {...rest} className={className} as={Basket} />;
    case 'block':
      return <IconStyled {...rest} className={className} as={Block} />;
    case 'calendar':
      return <IconStyled {...rest} className={className} as={Calendar} />;
    case 'chat':
      return <IconStyled {...rest} className={className} as={Chat} />;
    case 'clock':
      return <IconStyled {...rest} className={className} as={Clock} />;
    case 'cloudy':
      return <IconStyled {...rest} className={className} as={Cloudy} />;
    case 'code':
      return <IconStyled {...rest} className={className} as={Code} />;
    case 'delete':
      return <IconStyled {...rest} className={className} as={Delete} />;
    case 'edit':
      return <IconStyled {...rest} className={className} as={Edit} />;
    case 'figma':
      return <IconStyled {...rest} className={className} as={Figma} />;
    case 'filter':
      return <IconStyled {...rest} className={className} as={Filter} />;
    case 'fullSize':
      return <IconStyled {...rest} className={className} as={FullSize} />;
    case 'humidity':
      return <IconStyled {...rest} className={className} as={Humidity} />;
    case 'information':
      return <IconStyled {...rest} className={className} as={Information} />;
    case 'leif':
      return <IconStyled {...rest} className={className} as={Leif} />;
    case 'location':
      return <IconStyled {...rest} className={className} as={Location} />;
    case 'play':
      return <IconStyled {...rest} className={className} as={Play} />;
    case 'product':
      return <IconStyled {...rest} className={className} as={Product} />;
    case 'question':
      return <IconStyled {...rest} className={className} as={Question} />;
    case 'storybook':
      return <IconStyled {...rest} className={className} as={Storybook} />;
    case 'wateringCan':
      return <IconStyled {...rest} className={className} as={WateringCan} />;
    case 'wheelbarrow':
      return <IconStyled {...rest} className={className} as={Wheelbarrow} />;
    case 'chevron':
    case 'chevronDown':
    case 'chevronUp':
    case 'chevronLeft':
    case 'chevronRight':
      return (
        <IconStyled
          {...rest}
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
    case 'arrowUp':
    case 'arrowDown':
    case 'arrow':
      return (
        <IconStyled
          {...rest}
          className={className}
          transform={
            type === 'arrowDown'
              ? 'rotate(-90)'
              : type === 'arrowUp'
              ? 'rotate(90)'
              : type === 'arrowRight'
              ? 'scale(-1,1)'
              : ''
          }
          as={Arrow}
        />
      );
    default:
      return null;
  }
};

export default Icon;
