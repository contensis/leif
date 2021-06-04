import React from 'react';

import CardStyled from './Card.styled';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';

export interface Props {
  className?: string;
  date?: string;
  imageAlt: string;
  imageUri: string;
  isPromoted: boolean;
  path: string;
  price: number[];
  readTime?: string;
  rating?: string;
  text?: string;
  title: string;
  type: string;
  uri: string;
}

const Card = ({
  className,
  date,
  imageAlt,
  imageUri,
  isPromoted,
  path,
  price,
  readTime,
  rating,
  text,
  title,
  type,
  uri,
}: Props) => {
  const CardData = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <>
            <h3 className="card__title">{title}</h3>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {text && <p className="card__text">{text}</p>}
            <BlogDetail
              className="card__details"
              date={date}
              readTime={readTime}
            />
          </>
        );
      case 'product': {
        const priceText = price.length > 1 ? `${Math.min(...price)}+` : price;
        return (
          <>
            <div className="card__thumbnail-wrapper">
              <Image
                className="card__thumbnail"
                path={imageUri}
                alt={imageAlt}
              />
              <Icon
                type="product-solid"
                className="card__tag"
                color="#C3C6DE"
              />
              {path === '/search' && isPromoted && (
                <span className="card__featured-tag">Featured</span>
              )}
            </div>
            <div className="card__content">
              <h3 className="card__title">{title}</h3>
              {priceText && <span className="card__price">£{priceText}</span>}
              <Rating className="card__rating" rating={rating} />
            </div>
          </>
        );
      }
      case 'explore': {
        return (
          <>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {title && <h4 className="card__title">{title}</h4>}
          </>
        );
      }
      case 'content': {
        return (
          <>
            <h4 className="card__title">{title}</h4>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {text && <p className="card__text">{text}</p>}
          </>
        );
      }
      default:
        break;
    }
  };
  return (
    <CardStyled
      className={className}
      type={type}
      hasText={text ? true : false}
      uri={uri}
      title={title}
    >
      {CardData(type)}
    </CardStyled>
  );
};

export default Card;
