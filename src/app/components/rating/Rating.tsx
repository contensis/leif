import React from 'react';

import Icon from '../icon/Icon';
import RatingStyled from './Rating.styled';

interface Props {
  className?: string;
  rating: string | undefined;
}

const Rating = ({ className, rating }: Props) => {
  if (!rating) return <></>;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(`star__${i}`);
  }

  return (
    <RatingStyled className={className} rating={rating}>
      {stars &&
        stars.map(s => {
          return (
            <Icon
              key={s}
              type="star"
              className="rating__star"
              color="#F1F1F1"
            />
          );
        })}
    </RatingStyled>
  );
};

export default Rating;
