import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Metadata from '~/components/metadata/Metadata';

// Selectors
import { selectProductsInBasket } from '~/core/redux/custom/basket/selectors';
import { isEmptyObj } from '~/utils/isEmptyObj';

// Layout
import MainLayout from '../../layout/MainLayout';
import BasketStyled from './Basket.styled';

// Modals
import { BasketItemProps } from '~/components/basketMenu/BasketMenu';
import BasketItem from '~/components/basketItem/BasketItem';
import BasketSummary from '~/components/basketSummary/BasketSummary';
import LinkButton from '~/components/linkButton/LinkButton';

const BasketPage = () => {
  let basket = useSelector(selectProductsInBasket);
  basket = basket && basket.toJS();

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
    <MainLayout>
      <Metadata
        title="Your basket"
        image="/image-library/default-images/leif-fallback.png"
      />
      <BasketStyled>
        <h1 className="basket__title">Your basket</h1>
        <div className="basket__content">
          {hasItemsInBasket && (
            <div className="basket__items-wrapper">
              {basketArray &&
                basketArray.map((item: any[]) => {
                  if (!item || item.length < 1) return null;
                  return item.map((product: BasketItemProps, idx: number) => {
                    return (
                      <BasketItem
                        key={idx}
                        {...product}
                        hasLargeStyles={true}
                        className="basket__item"
                        // _removeFromBasket={_removeFromBasket}
                      />
                    );
                  });
                })}
            </div>
          )}
          <div className="basket__summary">
            <BasketSummary />
            <LinkButton
              className="basket__checkout"
              label={`${hasItemsInBasket ? 'Checkout' : 'Browse our products'}`}
              href={`${hasItemsInBasket ? '/checkout' : '/products'}`}
            />
          </div>
        </div>
      </BasketStyled>
    </MainLayout>
  );
};

export default BasketPage;
