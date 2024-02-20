import { routing } from '@zengenti/contensis-react-base/redux';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from '~/components/link/Link';
import Rating from '~/components/rating/Rating';
import ProductCardStyled from './ProductCard.styled';

export interface Props {
  className?: string;
  title: string;
  image: { src: string; alt: string };
  price: string;
  rating: string;
  path: string;
  isPromoted: boolean;
}

const ProductCard = ({
  className,
  title,
  image,
  price,
  rating,
  path,
  isPromoted,
}: Props) => {
  const currentpath = useSelector(routing.selectors.selectCurrentPath);
  return (
    <ProductCardStyled className={className}>
      <div className="product-card__img--wrapper">
        {currentpath === '/search' && isPromoted && (
          <>
            <span className="product-card__tag">Featured</span>
            <svg
              className="product-card__icon"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <g clipPath="url(#a)">
                <path fill="#fff" d="M4.8 4.2h14.4v14.4H4.8z" />
                <path
                  fill="#C3C6DE"
                  fillRule="evenodd"
                  d="M18.564 9.49V5.736a.9.9 0 0 0-.9-.9h-3.755a1.8 1.8 0 0 0-1.272.527L5.7 12.299a.9.9 0 0 0 0 1.273L9.828 17.7a.9.9 0 0 0 1.272 0l6.937-6.937a1.8 1.8 0 0 0 .527-1.273Zm-2.319-1.16a.9.9 0 1 0-1.664-.689.9.9 0 0 0 1.664.69Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M4.8 4.2h14.4v14.4H4.8z" />
                </clipPath>
              </defs>
            </svg>
          </>
        )}
        {image.src && (
          <img
            className="product-card__img"
            src={image.src}
            alt={image.alt}
            style={{ objectFit: 'cover' }}
            width={400}
            height={400}
          />
        )}
      </div>
      <div className="product-card__content">
        <Link className="product-card__path" path={path}>
          <h3 className="product-card__title">{title}</h3>
        </Link>
        {price && <span className="product-card__price">{price}</span>}
        <Rating className="product-card__rating" rating={rating} />
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
