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

  console.info({ basket });

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
          <p className="basket-menu__text">Your basket is empty</p>
          <LinkButton
            label="Browse our products"
            href="/products"
            icon="arrow-right"
          />
        </div>
      )}
    </BasketMenuStyled>
  );
};

export default BasketMenu;
