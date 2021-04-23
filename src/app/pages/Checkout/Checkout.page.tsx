import React from 'react';

// Components
import Metadata from '~/components/metadata/Metadata';

// Layout
import MainLayout from '../../layout/MainLayout';
import CheckoutStyled from './Checkout.styled';

const CheckoutPage = () => {
  return (
    <MainLayout>
      <Metadata
        title="Checkout"
        image="/image-library/default-images/leif-fallback.png"
      />
      <CheckoutStyled></CheckoutStyled>
    </MainLayout>
  );
};

export default CheckoutPage;
