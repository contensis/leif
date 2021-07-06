import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import BasketSummaryStyled from './BasketSummary.styled';

// Selectors
import {
  selectTotalProductsInBasket,
  selectTotalProductsPrice,
} from '~/redux/basket/selectors';

export interface Props {
  className?: string;
}

const BasketSummary = ({ className }: Props) => {
  const totalItems = useSelector(selectTotalProductsInBasket);
  const totalPrice = useSelector(selectTotalProductsPrice);

  return (
    <BasketSummaryStyled className={className}>
      <h2 className="basket-summary__title">Order summary</h2>
      <div className="basket-summary__info">
        <div>
          <span>{totalItems} item</span>
          <span>£{totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>FREE</span>
        </div>
      </div>
      <span className="basket-summary__total">
        Total: <span>£{totalPrice.toFixed(2)}</span>
      </span>
    </BasketSummaryStyled>
  );
};

export default BasketSummary;
