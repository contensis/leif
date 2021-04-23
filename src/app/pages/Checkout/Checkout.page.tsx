import React, { useEffect, useState } from 'react';
import FeaturedProduct from '~/components/featuredProduct/FeaturedProduct';

// Components
import Metadata from '~/components/metadata/Metadata';

// Layout
import MainLayout from '../../layout/MainLayout';
import CheckoutStyled from './Checkout.styled';

// Mappers
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

const CheckoutPage = () => {
  const [featuredProductOptions, setFeaturedProductOptions] = useState<any>();

  useEffect(() => {
    setFeaturedProductOptions({
      id: 'featuredProduct',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: featuredProducts } = useMinilist(featuredProductOptions);
  featuredProducts.length = 1;

  return (
    <MainLayout>
      <Metadata
        title="Checkout"
        image="/image-library/default-images/leif-fallback.png"
      />
      <CheckoutStyled>
        <FeaturedProduct
          title="Checkout process not included in trial site"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis adipiscing urna, tellus. "
          linkLabel="Return to basket"
          linkUri="/basket"
          product={featuredProducts[0]}
        />
      </CheckoutStyled>
    </MainLayout>
  );
};

export default CheckoutPage;
