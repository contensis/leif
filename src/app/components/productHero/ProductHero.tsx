import React, { useState, useEffect } from 'react';

import ProductHeroStyled from './ProductHero.styled';

import SlickSlider from '../slickSlider/SlickSlider';
import LinkButton from '../linkButton/LinkButton';
import Rating from '../rating/Rating';
import Input from '../input/Input';
import InputControl from '../inputControl/InputControl';
import BackButton from '../backButton/BackButton';
import SocialShare from '../socialShare/SocialShare';
import Icon from '../icon/Icon';
import Wrapper from '../wrapper/Wrapper';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import Button from '../button/Button';
import FocusLock from 'react-focus-lock';
import { _useLockBodyScroll } from '~/utils/hooks/useLockBodyScroll';
import { isClient } from '~/utils/isClient';

export interface MatchingPotsProps {
  type: string;
  title: string;
  imageUri: string;
  imageAlt: string;
  price: number[];
}
export interface VariantProps {
  variantTitle: string;
  sku: string;
  price: number;
  diameter: number;
  height: number;
  internalDiameterCM?: number;
  externalDiameterCM?: number;
  externalHeightCM?: number;
  potDiameterCM?: number;
  heightCM?: number;
  matchingPots: MatchingPotsProps;
}

export interface Props {
  className?: string;
  id: any;
  slides: any[] | any;
  review?: string;
  title: string;
  text?: string;
  variants: VariantProps[];
  activeVariant: VariantProps[];
  _setActiveVariant: (value: VariantProps) => void;
  _setIsModalOpen: (val: boolean) => void;
  isModalOpen: boolean;
  basket: any;
  _addToBasket: (
    id: string,
    productTitle: string,
    quantity: number,
    activeVariant: VariantProps
  ) => void;
}

interface ProductHeroModalOverlayProps {
  slides: any[] | any;
  _setIsModalOpen: (val: boolean) => void;
}

const ProductHeroModalOverlay = ({
  slides,
  _setIsModalOpen,
}: ProductHeroModalOverlayProps) => {
  _useLockBodyScroll();
  return (
    <FocusLock>
      <div className="product-hero__modal">
        <div className="product-hero__modal-slider">
          <SlickSlider
            slides={slides}
            hasNav={true}
            hasScrollImage={true}
            swipeToSlide={false}
            draggable={false}
          />
        </div>
        <button
          type="button"
          className="product-hero__modal-close"
          onClick={() => _setIsModalOpen(false)}
        >
          <Icon type="close" />
          <VisuallyHidden text="Close" />
        </button>
      </div>
    </FocusLock>
  );
};

const ProductHero = ({
  className,
  id,
  slides,
  title,
  text,
  variants,
  _addToBasket,
  activeVariant,
  _setActiveVariant,
  review,
  isModalOpen,
  _setIsModalOpen,
}: Props) => {
  let [quantity, updateQuantity] = useState<number>(1);

  /* eslint-disable */
  useEffect(() => {
    if (variants && variants.length >= 1) {
      _setActiveVariant(variants[0]);
    }
  }, []);
  /* eslint-enable */

  const { price } = activeVariant || {};

  const _handleClick = (e: any, type: string) => {
    e.preventDefault();
    if (type === 'increase') {
      updateQuantity((quantity += 1));
    } else {
      updateQuantity(quantity === 0 ? 0 : (quantity -= 1));
    }
  };

  useEffect(() => {
    if (isClient()) {
      const rootEl = document.getElementById('root');
      if (isModalOpen) {
        window.scrollTo({
          top: 0,
        });
        if (rootEl) rootEl.classList.add('white-overlay');
      } else {
        if (rootEl) rootEl.classList.remove('white-overlay');
      }
    }
  }, [isModalOpen]);

  if (!variants || variants.length < 1) return null;
  return (
    <ProductHeroStyled className={className} isModalOpen={isModalOpen}>
      <Wrapper
        condition={isModalOpen}
        wrapper={() => (
          <>
            <ProductHeroModalOverlay
              slides={slides}
              _setIsModalOpen={_setIsModalOpen}
            />
          </>
        )}
      >
        <BackButton label="All products" uri="/products/shop" />
        <div className="product-hero__content">
          {!isModalOpen && (
            <div className="product-hero__slider-wrapper">
              <SlickSlider
                slides={slides}
                hasNav={true}
                className="product-hero__slider"
              />
              <button
                type="button"
                className="product-hero__slider-fullsize"
                onClick={() => _setIsModalOpen(true)}
              >
                <VisuallyHidden text="Open image slider fullscreen" />
                <Icon
                  type="full-size"
                  className="product-hero__slider-fullsize-icon"
                />
              </button>
            </div>
          )}
          <div className="product-hero__wrapper">
            <div className="product-hero__socials-wrapper">
              <Rating {...review} />
              <SocialShare className="product-hero__socials" />
            </div>
            <h1 className="product-hero__title">{title}</h1>
            {text && <p className="product-hero__text">{text}</p>}
            <span className="product-hero__price">£{price}</span>
            <div className="product-hero__variant">
              {variants &&
                variants.map((variant: VariantProps, idx: number) => {
                  return (
                    <LinkButton
                      key={idx}
                      label={variant.variantTitle}
                      href="#"
                      type="secondary"
                      isHollow={
                        activeVariant.sku === variant.sku ? false : true
                      }
                      className="product-hero__option"
                      onClick={() => {
                        _setActiveVariant(variant);
                        updateQuantity(1);
                      }}
                    />
                  );
                })}
            </div>
            <div className="product-hero__input-wrapper">
              <Input
                label="Quantity"
                defaultValue={quantity}
                id="plant-quantity"
                className="product-hero__input"
              />
              <div className="product-hero__input-controls">
                <InputControl
                  className="product-hero__input-minus"
                  type="minus"
                  onClick={e => _handleClick(e, 'decrease')}
                />
                <InputControl
                  className="product-hero__input-plus"
                  type="plus"
                  onClick={e => _handleClick(e, 'increase')}
                />
              </div>
            </div>
            <Button
              icon="arrow-right"
              label="Add to barrow"
              onClick={() => {
                _addToBasket(id, title, quantity, activeVariant);
              }}
              className="product-hero__btn"
            />
          </div>
        </div>
      </Wrapper>
    </ProductHeroStyled>
  );
};

export default ProductHero;
