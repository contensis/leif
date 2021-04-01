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
import { selectActiveVariantMatchingPots } from '~/core/redux/custom/product/selectors';

const ProductPage = ({ mappedEntry }: Props) => {
  const {
    productHeroProps,
    textBlockProps,
    iconListProps,
    matchingProductsProps,
  } = mappedEntry || {};

  const results = useSelector(selectActiveVariantMatchingPots);
  matchingProductsProps.results = results && results.toJS();

  return (
    <MainLayout>
      <ProductPageStyled>
        <Region width="full" margin="none">
          <ProductHero {...productHeroProps} />
        </Region>
        <div className="product-page__content">
          <Region width="small" margin="medium">
            <TextBlock {...textBlockProps} />
          </Region>
          <Region width="small" margin="large">
            <IconList {...iconListProps} />
          </Region>
        </div>
        <Region width="full" margin="large">
          <PromotedContent {...matchingProductsProps} />
        </Region>
      </ProductPageStyled>
    </MainLayout>
  );
};

export default ProductPage;
