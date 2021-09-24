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
import VisuallyHidden from '~/components/visuallyHidden/VisuallyHidden';

const CheckoutPage = () => {
  const [featuredProductOptions, setFeaturedProductOptions] = useState<any>();

  useEffect(() => {
    setFeaturedProductOptions({
      id: 'featuredProduct',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: featuredProducts } = useMinilist(featuredProductOptions);

  return (
    <MainLayout>
      <Metadata
        title="Checkout"
        image="/image-library/default-images/leif-fallback.png"
      />
      <CheckoutStyled>
        <VisuallyHidden>
          <h1>Checkout</h1>
        </VisuallyHidden>
        <FeaturedProduct
          title="Well, this is awkward."
          text="Sorry, we're all out of plants, so this is as far as we can take you for now. But, using webhooks and our APIs, you can easily integrate with payment providers such as Stripe, Paypal, and others. Looking for a demonstration or advice? <a href='https://www.contensis.com/contact-us'>Get in touch</a> to arrange a call with a customer success engineer."
          linkLabel="Return to basket"
          linkUri="/basket"
          product={featuredProducts[0]}
        />
      </CheckoutStyled>
    </MainLayout>
  );
};

export default CheckoutPage;
