import React from 'react';
import { useSelector } from 'react-redux';

// Components
import TextBlock from '~/components/textBlock/TextBlock';
import IconList from '~/components/iconList/IconList';
import PromotedContent from '~/components/promotedContent/PromotedContent';
import Metadata from '~/components/metadata/Metadata';
import BackButton from '~/components/backButton/BackButton';
import ProductHeroSlider from '~/components/productHeroSlider/ProductHeroSlider';
import QuoteBlock from '~/components/quoteBlock/QuoteBlock';
import ProductHeroContent from '~/components/productHeroContent/ProductHeroContent.container';

// Layout
import ProductPageStyled from './ProductPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ProductPage.d';

// Redux - Selectors
import { selectScreenSize } from '~/redux/ui/selectors';
import {
  selectActiveVariantMatchingPots,
  selectProductReviews,
} from '~/redux/product/selectors';

const ProductPage = ({ mappedEntry }: Props) => {
  const { hero, slider, text, icons, promotion, meta } = mappedEntry || {};

  // Select Product Matching Pots from Redux state.
  const results = useSelector(selectActiveVariantMatchingPots);

  // Select Product Reviews from Redux state.
  const reviews = useSelector(selectProductReviews);

  const screenSize = useSelector(selectScreenSize);
  const isDesktop = screenSize >= 1024 ? true : false;

  return (
    <MainLayout>
      <Metadata {...meta} />
      <ProductPageStyled>
        <div className="product-page__scroll-container">
          <div className="product-page__content">
            <BackButton
              className="product-page__back-btn"
              label="All products"
              path="/products"
            />
            <div className="product-page__hero">
              <ProductHeroSlider {...slider} />
              {!isDesktop && <ProductHeroContent {...hero} />}
            </div>
            <Region width="small" margin="medium">
              <TextBlock {...text} />
            </Region>
            <Region width="small" margin="large">
              <IconList {...icons} />
            </Region>
            {reviews && reviews[0] && (
              <Region width="small" margin="large">
                <QuoteBlock className="product-page__quote" {...reviews[0]} />
              </Region>
            )}
          </div>
          {isDesktop && <ProductHeroContent {...hero} />}
        </div>
        <Region width="full" margin="large">
          <PromotedContent results={results} {...promotion} />
        </Region>
      </ProductPageStyled>
    </MainLayout>
  );
};

export default ProductPage;
