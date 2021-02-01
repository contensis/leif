import React from 'react';

import CardStyled from '../components.styled/Card.styled';
import formatDate from '~/utils/formatDate';
import Icon from '../../icon';
import Rating from '../../rating';

/**
 * @param {object} props
 * @param {string} props.type
 * @param {string} props.title
 * @param {string} props.text
 * @param {object} props.image
 * @param {number} props.readTime
 * @param {string} props.date
 * @param {number} props.price
 * @param {number} props.rating
 */

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

export default Card;
