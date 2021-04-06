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
  _removeFromBasket: (id: string, sku: string) => void;
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
        className="basket-item__remove-btn"
        onClick={() => _removeFromBasket(id, sku)}
      >
        <Icon type="delete" color="#2B2F51" />
        <VisuallyHidden text={`Remove ${title} from basket`} />
      </button>
    </BasketItemStyled>
  );
};

export default BasketItem;
