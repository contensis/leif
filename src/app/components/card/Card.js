import React from 'react';

import CardStyled from './Card.styled';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import dateWithSuffix from '~/utils/dateWithSuffix';

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
          <h3 className="card__title">{title}</h3>
          <img
            className="card__thumbnail"
            src={image.asset.sys.uri}
            alt={image.asset.altText}
          />
          {text && <p className="card__text">{text}</p>}
          <div className="card__details">
            {date && (
              <span className="card__date">
                {dateWithSuffix(date, 'dd MMM')}
              </span>
            )}
            {readTime && (
              <span className="card__readtime">{readTime} min read</span>
            )}
          </div>
        </CardStyled>
      );
    case 'product':
      return (
        <CardStyled className={className} type={type} href="#" title={title}>
          <div className="card__thumbnail-wrapper">
            <img
              className="card__thumbnail"
              src={image.asset.sys.uri}
              alt={image.asset.altText}
            />
            <Icon type="tag" className="card__tag" />
          </div>
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            {price && <span className="card__price">£{price}</span>}
            <Rating className="card__rating" rating={rating} />
          </div>
        </CardStyled>
      );
    default:
      return null; // Default card here? maybe content card?
  }
};

export default Card;
