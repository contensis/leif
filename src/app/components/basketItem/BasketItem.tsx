import React from 'react';
import BasketItemStyled from './BasketItem.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

export interface Props {
  className?: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
  sku: string;
  _removeFromBasket: (id: number, sku: string, quantity: number) => void;
}

const BasketItem = ({
  className,
  price,
  title,
  quantity,
  id,
  sku,
  _removeFromBasket,
}: Props) => {
  return (
    <BasketItemStyled className={className}>
      <div>
        <span className="basket-item__title">{title}</span>
        <h6>{price}</h6>
        <span>Quantity: {quantity}</span>
      </div>
      <button
        type="button"
        onClick={() => _removeFromBasket(id, sku, price, quantity)}
      >
        <Icon type="delete" />
        <VisuallyHidden text={`Remove ${title} from basket`} />
      </button>
    </BasketItemStyled>
  );
};

export default BasketItem;
