import React from 'react';

import Icon from '../icon/Icon';
import RatingStyled from './Rating.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {number} props.rating 0 - 5
 */

const Rating = ({ className, rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(`rStar-${i}`);
  }
  return (
    <RatingStyled className={className} rating={rating}>
      {stars &&
        stars.map(s => {
          return <Icon key={s} type="star" className="rStar" />;
        })}
    </RatingStyled>
  );
};

export default Rating;
