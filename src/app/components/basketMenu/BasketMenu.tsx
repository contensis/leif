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
import BasketSummary from '../basketSummary/BasketSummary';

export interface Props {
  className?: string;
  _setIsBasketOpen: (val: boolean) => void;
  _setIsSearchOpen: (val: boolean) => void;
  isBasketOpen: boolean;
  basket: any;
  totalItems: number;
}

export interface BasketSidebarProps {
  _setIsBasketOpen: (val: boolean) => void;
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
  basket,
}: BasketSidebarProps) => {
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

  const basketArray = Object.keys(basket).map(key => {
    const basketItem: BasketItemProps[] = [];
    if (!isEmptyObj(basket[key])) {
      const items = [basket[key]];
      items.forEach(el => {
        if (!el) return null;
        Object.keys(el).map(key => {
          basketItem.push(el[key]);
        });
      });
    }
    return basketItem;
  });

  const hasItemsInBasket = basketArray && basketArray.length >= 1;

  return (
    <div className="basket-menu__content-wrapper" ref={ref}>
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
            <div className="basket-menu__items">
              {basketArray &&
                basketArray.map((item: any[]) => {
                  if (!item || item.length < 1) return null;
                  return item.map((product: BasketItemProps, idx: number) => {
                    return (
                      <BasketItem
                        key={idx}
                        className="basket-menu__item"
                        {...product}
                      />
                    );
                  });
                })}
            </div>
            <BasketSummary />
          </div>
        )}
        {hasItemsInBasket && (
          <LinkButton
            className="basket-menu__checkout"
            label="Checkout"
            href="/checkout"
          />
        )}
        {!hasItemsInBasket && (
          <LinkButton
            className="basket-menu__product-link"
            label="Browse our products"
            href="/products"
            icon="arrow-right"
          />
        )}
      </FocusLock>
    </div>
  );
};

const BasketMenu = ({
  className,
  isBasketOpen,
  _setIsBasketOpen,
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
      <button
        className="basket-menu__btn--wrapper"
        onClick={() => {
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
      </button>
      {isBasketOpen && (
        <BasketMenuSidebar
          isBasketOpen={isBasketOpen}
          _setIsBasketOpen={_setIsBasketOpen}
          basket={basket}
          totalItems={totalItems}
        />
      )}
    </BasketMenuStyled>
  );
};

export default BasketMenu;
