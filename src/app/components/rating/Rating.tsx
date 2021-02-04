import React from 'react';

import Icon from '../icon/Icon';
import RatingStyled from './Rating.styled';


interface Props {
  className?: string,
  rating: string,
}

const Rating: React.FC<Props> = ({ className, rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(`star__${i}`);
  }
  return (
    <RatingStyled className={className} rating={rating}>
      {stars &&
        stars.map(s => {
          return <Icon key={s} type="star" className="rating__star" />;
        })}
    </RatingStyled>
  );
};

export default Rating;
