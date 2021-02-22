import React from 'react';

import SearchCardStyled from './SearchCard.styled';
import Image, { ImageObject } from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';

export interface Props {
  className?: string;
  type: string;
  title: string;
  text?: string;
  image: ImageObject;
  date?: string;
  readTime?: string;
  price?: number;
}

const SearchCard = ({
  className,
  type,
  title,
  text,
  image,
  readTime,
  date,
  price,
}: Props) => {
  const SearchCard = (type: string) => {
    switch (type) {
      case 'blogPost':
        return (
          <>
            <Image image={image} className="search-card__image" />
            <div className="search-card__content">
              <h2>{title}</h2>
              <p className="search-card__text">{text}</p>
              <BlogDetail
                className="search-card__detail"
                date={date}
                readTime={readTime}
              />
            </div>
          </>
        );
      case 'plant':
      case 'pot':
        return (
          <>
            <Image image={image} className="search-card__image" />
            <div className="search-card__content">
              <h2>{title}</h2>
              <span className="search-card__detail">£{price}</span>
              <p className="search-card__text">{text}</p>
            </div>
          </>
        );
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
    <SearchCardStyled className={className} type={type} title={title} href="#">
      {SearchCard(type)}
    </SearchCardStyled>
  );
};

export default SearchCard;
