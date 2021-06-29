import React, { useState, useEffect } from 'react';

// Styles
import ProductHeroContentStyled from './ProductHeroContent.styled';

// Components
import LinkButton from '../linkButton/LinkButton';
import Rating from '../rating/Rating';
import Input from '../input/Input';
import InputControl from '../inputControl/InputControl';
import SocialShare from '../socialShare/SocialShare';
import Button from '../button/Button';
import BasketModal from '../basketModal/BasketModal';

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
  imageUri: string;
  id: any;
  review?: string;
  title: string;
  text?: string;
  variants: VariantProps[];
  activeVariant: VariantProps;
  _setActiveVariant: (value: VariantProps) => void;
  _setIsPopupOpen: (val: boolean) => void;
  isPopupOpen: boolean;
  basket: any;
  _addToBasket: (
    id: string,
    imageUri: string,
    productTitle: string,
    quantity: number,
    activeVariant: VariantProps
  ) => void;
}

const ProductHeroContent = ({
  className,
  id,
  imageUri,
  title,
  text,
  variants,
  _addToBasket,
  activeVariant,
  _setActiveVariant,
  review,
  _setIsPopupOpen,
  isPopupOpen,
}: Props) => {
  const [quantity, updateQuantity] = useState<number>(1);

  const { price, variantTitle } = activeVariant || {};

  /* eslint-disable */
  useEffect(() => {
    if (variants && variants.length >= 1) {
      _setActiveVariant(variants[0]);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      _setIsPopupOpen(false);
    }, 8000);
  }, [isPopupOpen]);
  /* eslint-enable */

  const _handleClick = (e: any, type: string) => {
    e.preventDefault();
    if (type === 'increase') {
      let newQ = Number(quantity);
      updateQuantity((newQ += 1));
    } else {
      updateQuantity(quantity <= 1 ? 1 : quantity - 1);
    }
  };

  if (!variants || variants.length < 1) return null;
  return (
    <ProductHeroContentStyled className={className}>
      {isPopupOpen && (
        <BasketModal
          className="product-hero__basket-modal"
          image={imageUri}
          name={title}
          variant={variantTitle}
          price={price}
        />
      )}
      <div className="product-hero__content">
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
                      activeVariant.variantTitle === variant.variantTitle
                        ? false
                        : true
                    }
                    className="product-hero__option"
                    onClick={(e: any) => {
                      e.preventDefault();
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
              type="number"
              defaultValue={quantity}
              id="plant-quantity"
              className="product-hero__input"
              min="1"
              _onChange={(e: any) => updateQuantity(Number(e.target.value))}
              _onBlur={(e: any) => updateQuantity(Number(e.target.value))}
            />
            <div className="product-hero__input-controls">
              <InputControl
                className="product-hero__input-minus"
                type="minus"
                label="minus"
                onClick={e => _handleClick(e, 'decrease')}
              />
              <InputControl
                className="product-hero__input-plus"
                type="plus"
                label="plus"
                onClick={e => _handleClick(e, 'increase')}
              />
            </div>
          </div>
          <Button
            icon="arrow-right"
            label="Add to basket"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              _setIsPopupOpen(true);
              _addToBasket(id, imageUri, title, quantity, activeVariant);
            }}
            className="product-hero__btn"
          />
        </div>
      </div>
    </ProductHeroContentStyled>
  );
};

export default ProductHeroContent;
