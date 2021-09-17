import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket, updateQuantity } from '~/redux/basket/actions';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import InputControl from '../inputControl/InputControl';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import BasketItemStyled from './BasketItem.styled';
import Image from '../image/Image';

export interface Props {
  className: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
  sku: string;
  imageUri?: string;
  variant?: string;
  hasLargeStyles?: boolean;
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
  hasLargeStyles = false,
}: Props) => {
  const dispatch = useDispatch();
  const _removeFromBasket = () => {
    dispatch(removeFromBasket(id, sku, quantity, price));
  };

  const _updateQuantity = (type?: string, val = '') => {
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
        const newQuantity = Number(val);
        if (newQuantity === quantity) return null;
        dispatch(updateQuantity(id, sku, price, newQuantity, type));
        break;
      }
    }
  };

  return (
    <BasketItemStyled className={className} hasLargeStyles={hasLargeStyles}>
      <div className="basket-item__content--wrapper">
        <Image
          src={imageUri}
          alt={title}
          className="basket-item__image"
          width={120}
          height={120}
        />
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
                label="minus"
                className="basket-item__input-minus"
                type="minus"
                onClick={() => _updateQuantity('minus')}
              />
              <InputControl
                className="basket-item__input-plus"
                type="plus"
                label="plus"
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
