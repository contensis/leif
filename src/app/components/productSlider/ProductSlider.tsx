import React from 'react';

import ProductSliderStyled from './ProductSlider.styled';
import SlickSlider from '../slickSlider/SlickSlider';
import HeroContent from '../heroContent/HeroContent';
import { useDeliveryApiToGetProducts } from '~/utils/hooks/useDeliveryApiToGetProducts';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { _createResponsiveSettings } from './utils/responsiveSettings';
import { useSelector } from 'react-redux';
import { selectMatchingProducts } from '~/redux/basket/selectors';

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
    const matchingProducts: [] = useSelector(selectMatchingProducts);

    switch (hasFilter) {
      case true: {
        const mappedProducts = mapEntriesToResults(
          useDeliveryApiToGetProducts(filter)
        );
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
                  mappedProducts.length >= 4
                    ? 4
                    : mappedProducts.length === 3
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
        if (matchingProducts && matchingProducts.length > 0) {
          title = 'Forgotten something';
          summary = 'Here are some products that we think you might like.';
          products = matchingProducts;
        }
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
                slidesToShow={
                  products.length >= 4
                    ? 4
                    : products.length === 3
                    ? 3
                    : products.length === 2
                    ? 2
                    : 1
                }
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
