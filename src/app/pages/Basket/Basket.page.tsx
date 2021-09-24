import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import Metadata from '~/components/metadata/Metadata';
import BasketItem from '~/components/basketItem/BasketItem';
import BasketSummary from '~/components/basketSummary/BasketSummary';
import LinkButton from '~/components/linkButton/LinkButton';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Selectors
import { selectProductsInBasket } from '~/redux/basket/selectors';
import { isEmptyObj } from '~/utils/isEmptyObj';

// Layout
import MainLayout from '../../layout/MainLayout';
import BasketStyled from './Basket.styled';

// Modals
import { BasketItemProps } from '~/components/basketMenu/BasketMenu';

// Mappers
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import VisuallyHidden from '~/components/visuallyHidden/VisuallyHidden';
import Icon from '~/components/icon/Icon';
import Link from '~/components/link/Link';

const BasketPage = () => {
  const basket = useSelector(selectProductsInBasket);

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
      id: 'featuredProducts',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: featuredProducts } = useMinilist(featuredProductOptions);

  return (
    <MainLayout>
      <Metadata
        title="Your basket"
        image="/image-library/default-images/leif-fallback.png"
      />
      <BasketStyled>
        <div className="basket__page-content">
          <h1 className="basket__title">Your basket</h1>
          <div className="basket__content">
            {hasItemsInBasket && (
              <>
                <div className="basket__items-wrapper">
                  {basketArray &&
                    basketArray.map((item: any[]) => {
                      if (!item || item.length < 1) return null;
                      return item.map(
                        (product: BasketItemProps, idx: number) => {
                          return (
                            <BasketItem
                              key={idx}
                              {...product}
                              hasLargeStyles={true}
                              className="basket__item"
                            />
                          );
                        }
                      );
                    })}
                </div>
                <div className="basket__summary">
                  <BasketSummary />
                  <LinkButton
                    className="basket__checkout"
                    label="Checkout"
                    href="/checkout"
                  />
                  <Link uri="/checkout" className="basket__paypal">
                    <img src="/static/img/logos/paypal-logo.png" alt="PayPal" />
                    <VisuallyHidden text="Check out with PayPal" />
                  </Link>
                </div>
              </>
            )}
            {!hasItemsInBasket && (
              <div className="basket__empty">
                <Icon type="basket" height={64} width={64} />
                <p>Your basket is empty</p>
                <LinkButton
                  className="basket__product-link"
                  label="Browse our products"
                  icon="arrow-right"
                  href="/products"
                />
              </div>
            )}
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
