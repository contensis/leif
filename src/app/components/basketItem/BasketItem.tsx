import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '~/core/redux/custom/basket/actions';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import InputControl from '../inputControl/InputControl';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import BasketItemStyled from './BasketItem.styled';
// import Icon from '../icon/Icon';
// import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

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
              id={`${title.replace('', '-')}`}
              isHidden
            />
            <div className="basket-item__input-controls">
              <InputControl className="basket-item__input-minus" type="minus" />
              <InputControl className="basket-item__input-plus" type="plus" />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => _removeFromBasket()}
          className="basket-item__btn--close"
        >
          <VisuallyHidden text={`Remove ${title} from basket`} />
          <Icon type="close" />
        </button>
      </div>
    </BasketItemStyled>
  );
};

export default BasketItem;
