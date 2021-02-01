import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../icon';
import RatingStyled from '../components.styled/Rating.styled';

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

Rating.propTypes = {
  className: PropTypes.string,
  rating: PropTypes.number,
};

export default Rating;
