import React from 'react';

import CardStyled from './Card.styled';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import dateWithSuffix from '../../utils/dateWithSuffix';
import Image, { ImageObject } from '../image/Image'
export interface Props {
  className?: string;
  type: string;
  title: string;
  text?: string;
  image: ImageObject;
  date?: string;
  readTime?: string;
  price?: number;
  rating?: string;
}

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
}: Props) => {
  const CardData = (type:string) => {
    switch (type) {
      case 'blogPost':
        return (
          <>
            <h3 className="card__title">{title}</h3>
            <Image className="card__thumbnail" image={image} />
            {text && <p className="card__text">{text}</p>}
            <div className="card__details">
              {date && (
                <span className="card__date">{dateWithSuffix(date)}</span>
              )}
              {readTime && (
                <span className="card__readtime">{readTime} min read</span>
              )}
            </div>
          </>
        );
      case 'plant':
      case 'pot':
        return (
          <>
            <div className="card__thumbnail-wrapper">
              <Image className="card__thumbnail"image={image} />
              <Icon type="tag" className="card__tag" />
            </div>
            <div className="card__content">
              <h3 className="card__title">{title}</h3>
              {price && <span className="card__price">£{price}</span>}
              <Rating className="card__rating" rating={rating} />
            </div>
          </>
        );
      case 'explore': {
        return (
          <>
            <Image
              className="card__thumbnail"
              image={image} />
            {title && <h4 className="card__title">{title}</h4>}
          </>
        )
      }
      case 'content': {
        return (
          <>
            <h4 className="card__title">{title}</h4>
            <Image
              className="card__thumbnail"
              image={image} />
            {text && <p className="card__text">{text}</p>}
          </>
        )
      }
      default:
        break;
    }
  }
  return (
    <CardStyled
      className={className}
      type={type} href="#"
      title={title}
      hasText={text ? true : false}>
      {CardData(type)}
    </CardStyled>
  )
};

export default Card;
