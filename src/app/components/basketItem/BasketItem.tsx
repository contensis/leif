import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromBasket,
  updateQuantity,
} from '~/core/redux/custom/basket/actions';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import InputControl from '../inputControl/InputControl';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import BasketItemStyled from './BasketItem.styled';

export interface Props {
  className?: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
  sku: string;
  imageUri: string;
  variant: string;
  _removeFromBasket: (id: string, sku: string, quantity: number) => void;
  hasLargeStyles: boolean;
}

const BasketItem = ({
  className,
  id,
  sku,
  price,
  title,
  variant,
  quantity,
  imageUri,
  hasLargeStyles,
}: Props) => {
  const dispatch = useDispatch();
  const _removeFromBasket = () => {
    dispatch(removeFromBasket(id, sku, quantity, price));
  };

  const _updateQuantity = (type?: string, val?: string) => {
    switch (type) {
      case 'minus': {
        const q = (quantity -= 1);
        if (q === 0) dispatch(removeFromBasket(id, sku, 1, price));
        else dispatch(updateQuantity(id, sku, price, q, type));
        break;
      }
      case 'plus': {
        const q = (quantity += 1);
        dispatch(updateQuantity(id, sku, price, q, type));
        break;
      }
      default: {
        const newQuantity: number = Number(val);
        if (newQuantity === quantity) return null;
        dispatch(updateQuantity(id, sku, price, newQuantity, type));
        break;
      }
    }
  };

  return (
    <BasketItemStyled className={className} hasLargeStyles={hasLargeStyles}>
      <div className="basket-item__content--wrapper">
        <img src={imageUri} alt={title} className="basket-item__image" />
        <div className="basket-item__content">
          <span className="basket-item__title">{title}</span>
          <span className="basket-item__variant">{variant}</span>
          <span className="basket-item__price">£{price}</span>
          <div className="basket-item__input--wrapper">
            <Input
              className="basket-item__input"
              label="Quantity"
              defaultValue={quantity}
              type="number"
              min="1"
              _onChange={(e: any) => _updateQuantity('', e.target.value)}
              _onBlur={(e: any) => _updateQuantity('', e.target.value)}
              id={`${title.replace('', '-')}`}
              isHidden
            />
            <div className="basket-item__input-controls">
              <InputControl
                className="basket-item__input-minus"
                type="minus"
                onClick={() => _updateQuantity('minus')}
              />
              <InputControl
                className="basket-item__input-plus"
                type="plus"
                onClick={() => _updateQuantity('plus')}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => _removeFromBasket()}
          className="basket-item__btn--close"
        >
          <VisuallyHidden text={`Remove ${title} from basket`} />
          <Icon type="close" width={18} height={18} />
        </button>
      </div>
    </BasketItemStyled>
  );
};

export default BasketItem;
