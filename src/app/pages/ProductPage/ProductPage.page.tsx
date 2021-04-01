import React from 'react';

// Components
import ProductHero from '~/components/productHero/ProductHero.container';
import TextBlock from '~/components/textBlock/TextBlock';
import IconList from '~/components/iconList/IconList';
import PromotedContent from '~/components/promotedContent/PromotedContent';

// Layout
import ProductPageStyled from './ProductPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ProductPage.d';

// Redux
import { useSelector } from 'react-redux';
import {
  selectActiveVariantMatchingPots,
  selectProductReviews,
} from '~/core/redux/custom/product/selectors';
import QuoteBlock from '~/components/quoteBlock/QuoteBlock';

const ProductPage = ({ mappedEntry }: Props) => {
  const {
    productHeroProps,
    textBlockProps,
    iconListProps,
    matchingProductsProps,
  } = mappedEntry || {};

  // Select Product Matching Pots from Redux state.
  const results = useSelector(selectActiveVariantMatchingPots);
  matchingProductsProps.results = results && results.toJS();

  // Select Product Reviews from Redux state.
  const reviews = useSelector(selectProductReviews).toJS();

  return (
    <MainLayout>
      <ProductPageStyled>
        <Region width="full" margin="none">
          <ProductHero {...productHeroProps} review={reviews[0]} />
        </Region>
        <div className="product-page__content">
          <Region width="small" margin="medium">
            <TextBlock {...textBlockProps} />
          </Region>
          <Region width="small" margin="large">
            <IconList {...iconListProps} />
          </Region>
          {reviews && reviews[0] && (
            <Region width="small" margin="large">
              <QuoteBlock className="product-page__quote" {...reviews[0]} />
            </Region>
          )}
        </div>
        <Region width="full" margin="large">
          <PromotedContent {...matchingProductsProps} />
        </Region>
      </ProductPageStyled>
    </MainLayout>
  );
};

export default ProductPage;
