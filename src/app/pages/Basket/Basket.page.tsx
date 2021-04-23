import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import Metadata from '~/components/metadata/Metadata';
import BasketItem from '~/components/basketItem/BasketItem';
import BasketSummary from '~/components/basketSummary/BasketSummary';
import LinkButton from '~/components/linkButton/LinkButton';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Selectors
import { selectProductsInBasket } from '~/core/redux/custom/basket/selectors';
import { isEmptyObj } from '~/utils/isEmptyObj';

// Layout
import MainLayout from '../../layout/MainLayout';
import BasketStyled from './Basket.styled';

// Modals
import { BasketItemProps } from '~/components/basketMenu/BasketMenu';

// Mapperrs
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

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
  const [featuredProductOptions, setFeaturedProductOptions] = useState<any>();

  useEffect(() => {
    setFeaturedProductOptions({
      id: 'featuredProduct',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: featuredProducts } = useMinilist(featuredProductOptions);
  featuredProducts.length = 3;

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
        <RelatedContent
          className="basket__related-content"
          title="You may also like"
          results={featuredProducts}
        />
      </BasketStyled>
    </MainLayout>
  );
};

export default BasketPage;
