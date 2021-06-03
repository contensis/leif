import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalProductsInBasket } from '~/redux/basket/selectors';
import { setIsPopupOpen } from '~/redux/ui/actions';
import { _useOnClickOutside } from '~/utils/hooks/useOnClickOutside';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import BasketModalStyled from './BasketModal.styled';

export interface Props {
  className?: string;
  image: string;
  name: string;
  variant: string;
  price: number;
}

const BasketModal = ({ className, name, variant, price, image }: Props) => {
  const dispatch = useDispatch();
  const _setIsPopupOpen = (val: boolean) => {
    dispatch(setIsPopupOpen(val));
  };

  const totalItemsInBasket = useSelector(selectTotalProductsInBasket);

  const ref = useRef();
  _useOnClickOutside(ref, () => _setIsPopupOpen(false));

  return (
    <BasketModalStyled className={className} ref={ref}>
      <div className="basket-modal__header">
        <div>
          <div className="basket-modal__tick--wrapper">
            <Icon
              type="tick"
              className="basket-modal__tick"
              width={18}
              height={18}
            />
          </div>
          Added to basket
        </div>
        <button
          className="basket-modal__button--close"
          type="button"
          onClick={() => _setIsPopupOpen(false)}
        >
          <VisuallyHidden text="Close basket modal" />
          <Icon type="close" width={18} height={18} />
        </button>
      </div>
      <div className="basket-modal__content--wrapper">
        <img className="basket-modal__product-image" src={image} alt={name} />
        <div className="basket-modal__content">
          <h3>{name}</h3>
          <span className="basket-modal__product-variant">{variant}</span>
          <span className="basket-modal__product-price">£{price}</span>
        </div>
      </div>
      <div className="basket-modal__buttons">
        <LinkButton
          href="/basket"
          label={`View basket(${totalItemsInBasket})`}
          type="secondary"
          isHollow
          className="basket-modal__button"
        />
        <LinkButton
          href="/checkout"
          label="Checkout"
          className="basket-modal__button"
        />
      </div>
    </BasketModalStyled>
  );
};

export default BasketModal;
