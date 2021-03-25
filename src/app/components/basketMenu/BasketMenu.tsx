import React, { useRef } from 'react';

import IconButton from '../iconButton/IconButton';
import BasketMenuStyled from './BasketMenu.styled';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';

// Hooks
// import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';

interface Props {
  className?: string;
  _toggleBasket: (val: boolean) => void;
  _toggleSearch: (val: boolean) => void;
  isBasketOpen: boolean;
  basket: any;
}

const BasketMenu = ({
  className,
  isBasketOpen,
  _toggleBasket,
  _toggleSearch,
  basket,
}: Props) => {
  const ref = useRef();

  const basketArray = Object.keys(basket).map(key => basket[key]);
  const hasItemsInBasket = basketArray && basketArray.length >= 1;

  return (
    <BasketMenuStyled
      className={className}
      isBasketOpen={isBasketOpen}
      ref={ref}
    >
      <IconButton
        icon="pot"
        text="Basket"
        className="basket-menu__btn"
        isToggled={isBasketOpen}
        _func={() => {
          _toggleSearch(false), _toggleBasket(!isBasketOpen);
        }}
      />
      {isBasketOpen && (
        <div className="basket-menu__content-wrapper">
          <Icon className="basket-menu__icon" type="wheelbarrow" />
          {!hasItemsInBasket && (
            <p className="basket-menu__text">Your basket is empty</p>
          )}
          {hasItemsInBasket && (
            <div className="basket-menu__items-wrapper">
              {basketArray.map((item, idx) => {
                return (
                  <div key={idx}>
                    <span>{item.product_title}</span>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                );
              })}
            </div>
          )}
          <LinkButton
            label={`${hasItemsInBasket ? 'Checkout' : 'Browse our products'}`}
            href={`${hasItemsInBasket ? '/checkout' : '/products'}`}
            icon="arrow-right"
          />
        </div>
      )}
    </BasketMenuStyled>
  );
};

export default BasketMenu;
