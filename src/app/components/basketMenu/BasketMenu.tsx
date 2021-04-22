import React, { useEffect, useRef } from 'react';

import IconButton from '../iconButton/IconButton';
import BasketMenuStyled from './BasketMenu.styled';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';
import BasketItem from '../basketItem/BasketItem';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';

// Utils
import { isEmptyObj } from '../../utils/isEmptyObj';
import FocusLock from 'react-focus-lock';
import { isClient } from '../../utils/isClient';
import { _useLockBodyScroll } from '../../utils/hooks/useLockBodyScroll';
import { addOverlayCSS, removeOverlayCSS } from '../../utils/addOverlayCSS';

export interface Props {
  className?: string;
  _setIsBasketOpen: (val: boolean) => void;
  _setIsSearchOpen: (val: boolean) => void;
  _removeFromBasket: (id: string, sku: string) => void;
  isBasketOpen: boolean;
  basket: any;
  totalItems: number;
}

export interface BasketItemProps {
  title: string;
  id: string;
  quantity: number;
  sku: string;
  price: number;
}

const BasketMenuSidebar = ({
  isBasketOpen,
  _setIsBasketOpen,
  _removeFromBasket,
  totalItems,
  basket,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _setIsBasketOpen(false));
  _useLockBodyScroll();

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _setIsBasketOpen(false);
    }
  };

  if (isClient()) {
    document.addEventListener('keydown', _handleKeyDown);
  }

  let TOTAL_PRICE = 0;
  const BASKET_ARRAY = Object.keys(basket).map(key => {
    const BASKET_ITEMS: BasketItemProps[] = [];
    if (!isEmptyObj(basket[key])) {
      const ITEMS = [basket[key]];
      ITEMS.forEach(el => {
        if (!el) return null;
        Object.keys(el).map(key => {
          BASKET_ITEMS.push(el[key]);
        });
      });
    }
    return BASKET_ITEMS;
  });

  const hasItemsInBasket = BASKET_ARRAY && BASKET_ARRAY.length >= 1;

  return (
    <div
      className="basket-menu__content-wrapper"
      onMouseLeave={() => _setIsBasketOpen(false)}
      ref={ref}
    >
      <FocusLock className="basket-menu__focus">
        <div className="basket-menu__header">
          {hasItemsInBasket && <h4>Your basket</h4>}
          <IconButton
            icon="basket"
            height={32}
            width={32}
            text="Basket"
            className="basket-menu__btn--close"
            isToggled={isBasketOpen}
            _func={() => _setIsBasketOpen(!isBasketOpen)}
          />
        </div>
        {!hasItemsInBasket && (
          <>
            <Icon className="basket-menu__icon" type="basket" />
            <p className="basket-menu__text">Your basket is empty</p>
          </>
        )}
        {hasItemsInBasket && (
          <div className="basket-menu__items-wrapper">
            {BASKET_ARRAY &&
              BASKET_ARRAY.map((item: any[]) => {
                if (!item || item.length < 1) return null;
                return item.map((product: BasketItemProps, idx: number) => {
                  TOTAL_PRICE += product.price * product.quantity;
                  console.info({ product });
                  return (
                    <BasketItem
                      key={idx}
                      className="basket-menu__item"
                      {...product}
                      _removeFromBasket={_removeFromBasket}
                    />
                  );
                });
              })}
            <h4 className="basket-menu__title">Order summary</h4>
            <div className="basket-menu__info">
              <div>
                <span>{totalItems} item</span>
                <span>£{TOTAL_PRICE.toFixed(2)}</span>
              </div>
              <div>
                <span>Delivery</span>
                <span>FREE</span>
              </div>
            </div>
            <span className="basket-menu__total">
              Total: <span>£{TOTAL_PRICE.toFixed(2)}</span>
            </span>
          </div>
        )}
        <LinkButton
          className="basket-menu__checkout"
          label={`${hasItemsInBasket ? 'Checkout' : 'Browse our products'}`}
          href={`${hasItemsInBasket ? '/checkout' : '/products'}`}
        />
      </FocusLock>
    </div>
  );
};

const BasketMenu = ({
  className,
  isBasketOpen,
  _setIsBasketOpen,
  _removeFromBasket,
  _setIsSearchOpen,
  basket,
  totalItems,
}: Props) => {
  useEffect(() => {
    if (isBasketOpen) addOverlayCSS();
    else removeOverlayCSS();
  }, [isBasketOpen]);

  return (
    <BasketMenuStyled className={className} isBasketOpen={isBasketOpen}>
      <a
        className="basket-menu__btn--wrapper"
        href="/basket"
        onMouseEnter={() => {
          _setIsSearchOpen(false);
          _setIsBasketOpen(!isBasketOpen);
        }}
      >
        <Icon
          type="basket"
          height={26}
          width={26}
          className="basket-menu__btn"
        />
        <span>{totalItems}</span>
      </a>
      {isBasketOpen && (
        <BasketMenuSidebar
          isBasketOpen={isBasketOpen}
          _setIsBasketOpen={_setIsBasketOpen}
          _removeFromBasket={_removeFromBasket}
          basket={basket}
          totalItems={totalItems}
        />
      )}
    </BasketMenuStyled>
  );
};

export default BasketMenu;
