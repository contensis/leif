import React from 'react';

// Components
import ProductHero from '~/components/productHero/ProductHero.container';

// Layout
import ProductPageStyled from './ProductPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ProductPage.d';
import TextBlock from '~/components/textBlock/TextBlock';
import IconList from '~/components/iconList/IconList';
import PromotedContent from '~/components/promotedContent/PromotedContent';

const ProductPage = ({ mappedEntry }: Props) => {
  const {
    productHeroProps,
    textBlockProps,
    iconListProps,
    matchingProductsProps,
  } = mappedEntry || {};
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
