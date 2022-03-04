import React from 'react';

import CardStyled from './Card.styled';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';

export interface Props {
  readonly contentTypes: string[];
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
            <Image
              className="card__thumbnail"
              src={imageUri}
              alt={imageAlt}
              width={360}
              height={360}
            />
            {text && <p className="card__text">{text}</p>}
            <BlogDetail
              className="card__details"
              date={date}
              readTime={readTime}
            />
          </>
        );
      case 'product': {
        const priceText = price?.length > 1 ? `${Math.min(...price)}+` : price;
        return (
          <>
            <div className="card__thumbnail-wrapper">
              <Image
                className="card__thumbnail"
                src={imageUri}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
              />
              {path === '/search' && isPromoted && (
                <span className="card__featured-tag">Featured</span>
              )}
            </div>
            <div className="card__tag-wrapper">
              <Icon
                type="product-solid"
                className="card__tag"
                color="#C3C6DE"
              />
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
            <div className="card__thumbnail-wrapper">
              <Image
                className="card__thumbnail"
                src={imageUri}
                alt={imageAlt}
                quality={80}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {title && <h3 className="card__title">{title}</h3>}
          </>
        );
      }
      case 'content': {
        return (
          <>
            <h3 className="card__title">{title}</h3>
            {imageUri && (
              <div className="card__thumbnail-wrapper">
                <Image
                  className="card__thumbnail"
                  src={imageUri}
                  alt={imageAlt}
                  quality={80}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
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
