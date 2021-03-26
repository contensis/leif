import React from 'react';

import ProductSliderStyled from './ProductSlider.styled';
import SlickSlider from '../slickSlider/SlickSlider';
import HeroContent from '../heroContent/HeroContent';
import { _useApiHook } from '../../utils/hooks/useApiHook';
import mapEntriesToResults from '../search/transformations/entry-to-card-props.mapper';
import { _createResponsiveSettings } from './utils/reponsiveSettings';

export interface Props {
  className?: string;
  title: string;
  summary: string;
  ctaLink: string;
  ctaText: string;
  bgImageUri: string;
  products: any;
  filter: string;
  hasFilter: boolean;
}

const ProductSlider = ({
  className,
  title,
  summary,
  ctaLink,
  ctaText,
  bgImageUri,
  products,
  filter,
  hasFilter = false,
}: Props) => {
  const _RenderProductSlider = (hasFilter: boolean) => {
    switch (hasFilter) {
      case true: {
        const mappedProducts = mapEntriesToResults(_useApiHook(filter));
        if (!mappedProducts || mappedProducts.length < 1) return null;
        return (
          <>
            <div className="card-slider__overlay" />
            <HeroContent
              className="card-slider__hero-content"
              title={title}
              summary={summary}
              ctaLink={ctaLink}
              ctaText={ctaText}
              btnIcon="product"
            />
            <div className="card-slider__slider">
              <SlickSlider
                type="card"
                slidesToShow={
                  mappedProducts.length >= 3
                    ? 3
                    : mappedProducts.length === 2
                    ? 2
                    : 1
                }
                responsive={_createResponsiveSettings(mappedProducts.length)}
                slides={mappedProducts}
                className="card-slider__slide"
              />
            </div>
          </>
        );
      }
      case false:
      default: {
        if (!products || products.length < 1) return null;
        return (
          <>
            <div className="card-slider__overlay" />
            <HeroContent
              className="card-slider__hero-content"
              title={title}
              summary={summary}
              ctaLink={ctaLink}
              ctaText={ctaText}
              btnIcon="product"
            />
            <div className="card-slider__slider">
              <SlickSlider
                type="card"
                slidesToShow={products.length >= 3 ? 3 : 2}
                responsive={_createResponsiveSettings(products.length)}
                slides={products}
                className="card-slider__slide"
              />
            </div>
          </>
        );
      }
    }
  };

  return (
    <ProductSliderStyled className={className} bgImageUri={bgImageUri}>
      {_RenderProductSlider(hasFilter)}
    </ProductSliderStyled>
  );
};

export default ProductSlider;
