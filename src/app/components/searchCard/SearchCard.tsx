import React from 'react';

import SearchCardStyled from './SearchCard.styled';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';
import { CardTypes } from '~/core/schema';

export interface Props {
  className?: string;
  type: string;
  title: string;
  text?: string;
  imageUri: string;
  imageAlt: string;
  date?: string;
  readTime?: string;
  price: number[];
  uri: string;
}

const SearchCard = ({
  className,
  date,
  image,
  price,
  readtime,
  text,
  title,
  type,
  path,
}: Props) => {
  const SearchCard = (type: string) => {
    switch (type) {
      case CardTypes.Blog:
        return (
          <>
            {image.src && (
              <div className="search-card__image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className="search-card__image"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="search-card__content">
              <h2>{title}</h2>
              <p className="search-card__text">{text}</p>
              {date && (
                <BlogDetail
                  className="search-card__detail"
                  date={date}
                  readtime={readtime}
                />
              )}
            </div>
          </>
        );
      case CardTypes.Product: {
        return (
          <>
            {image.src && (
              <div className="search-card__image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className="search-card__image"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="search-card__content">
              <h2>{title}</h2>
              <span className="search-card__detail">{price}</span>
              <p className="search-card__text">{text}</p>
            </div>
          </>
        );
      }
      default:
        return (
          <div className="search-card__content">
            <h2>{title}</h2>
            <p className="search-card__text">{text}</p>
          </div>
        );
    }
  };
  return (
    <SearchCardStyled
      className={className}
      type={type}
      title={title}
      path={path}
    >
      {SearchCard(type)}
    </SearchCardStyled>
  );
};

export default SearchCard;
