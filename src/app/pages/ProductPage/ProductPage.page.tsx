import React from 'react';

// Components
import ProductHero from '~/components/productHero/ProductHero';

// Layout
import ProductPageStyled from './ProductPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ProductPage.d';

const ProductPage = ({ mappedEntry }: Props) => {
  const { productHeroProps } = mappedEntry || {};
  console.info({ mappedEntry });
  return (
    <MainLayout>
      <ProductPageStyled>
        <Region width="full" margin="none">
          <ProductHero {...productHeroProps} />
        </Region>
      </ProductPageStyled>
    </MainLayout>
  );
};

export default ProductPage;
