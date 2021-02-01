import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from '../components.styled/Card.styled';
import formatDate from '~/utils/formatDate';
import Icon from '../../icon';
import Rating from '../../rating';

const Card = ({
  className,
  type,
  title,
  text,
  image,
  readTime,
  date,
  price,
  rating,
}) => {
  switch (type) {
    case 'blog':
      return (
        <CardStyled className={className} type={type} href="#" title={title}>
          <h3 className="cTitle">{title}</h3>
          <img
            className="cThumbnail"
            src={image.asset.sys.uri}
            alt={image.asset.altText}
          />
          {text && <p className="cText">{text}</p>}
          <div className="cDetails">
            {date && (
              <span className="cDate">{formatDate(date, 'dd MMM')}</span>
            )}
            {readTime && <span className="cReadTime">{readTime} min read</span>}
          </div>
        </CardStyled>
      );
    case 'product':
      return (
        <CardStyled className={className} type={type} href="#" title={title}>
          <div className="cThumbnailWrapper">
            <img
              className="cThumbnail"
              src={image.asset.sys.uri}
              alt={image.asset.altText}
            />
            <Icon type="tag" className="cTag" />
          </div>
          <div className="cContent">
            <h3 className="cTitle">{title}</h3>
            {price && <span className="cPrice">£{price}</span>}
            <Rating className="cRating" rating={rating} />
          </div>
        </CardStyled>
      );
    default:
      return null; // Default card here? maybe content card?
  }
};

Card.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
  readTime: PropTypes.number,
  date: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Card;
