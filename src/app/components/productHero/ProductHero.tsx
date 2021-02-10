import React, { useState } from 'react';

import ProductHeroStyled from './ProductHero.styled';

import SlickSlider from '~/components/slickSlider/SlickSlider';
import LinkButton from '~/components/linkButton/LinkButton';
import Rating from '~/components/rating/Rating';
import Input from '~/components/input/Input';
import InputControl from '~/components/inputControl/InputControl';
import BackButton from '~/components/backButton/BackButton';
import SocialShare from '~/components/socialShare/SocialShare';
import Icon from '~/components/icon/Icon'
import FocusLock from 'react-focus-lock';

interface Props {
  className?: string;
  slides: any[] | any;
  rating?: string;
  title: string;
  text?: string;
  price: number;
  options?: any,
}

interface WrapperProps {
  condition: any,
  wrapper?: any,
  children?: any,
}

const ProductHero: React.FC<Props> = ({
  className,
  slides,
  rating,
  title,
  text,
  price,
  options,
}) => {
  let [quantity, updateQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  const ProductHeroWrapper: React.FC<WrapperProps> = ({
    condition,
    wrapper,
    children,
  }) => (condition ? wrapper(children) : children);

  const _handleClick = (e: any, type: string) => {
    e.preventDefault(); 
    if (type === 'increase') {
      updateQuantity((quantity += 1));
    } else {
      updateQuantity(quantity === 0 ? 0 : (quantity -= 1));
    }
  }

  return (
    <ProductHeroStyled className={className} isModalOpen={isModalOpen}>
      <ProductHeroWrapper
        condition={isModalOpen}
        wrapper={(children: any) => (
          <>
            {children}
            <FocusLock>
              <div className="product-hero__modal">
                <div className="product-hero__modal-slider">
                  <SlickSlider
                    slides={slides}
                    hasNav
                    hasScrollImage
                    swipeToSlide={false}
                    draggable={false}
                  />
                </div>
                <button
                  type="button"
                  className="product-hero__modal-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <Icon type="cross" />
                </button>
              </div>
            </FocusLock>
          </>
        )}
      >
        <BackButton label="All products" />
        <div className="product-hero__content">
          {!isModalOpen && (
            <div className="product-hero__slider-wrapper">
              <SlickSlider
                slides={slides}
                hasNav
                className="product-hero__slider"
              />
              <button
                type="button"
                className="product-hero__slider-fullsize"
                onClick={() => setIsModalOpen(true)}
              >
                <Icon type="fullSize" />
              </button>
            </div>
          )}
          <div className="product-hero__wrapper">
            <div className="product-hero__socials-wrapper">
              <Rating rating={rating} />
              <SocialShare className="product-hero__socials" />
            </div>
            <h1 className="product-hero__title">{title}</h1>
            {text && <p className="product-hero__text">{text}</p>}
            <span className="product-hero__price">£{price}</span>
            <div className="product-hero__options">
              {options && options.map((opt:any, idx:number) => {
                return (
                  <LinkButton
                  label={opt.title}
                  href="#"
                  type="secondary"
                  isHollow={activeOption === idx ? false : true}
                  className="product-hero__option"
                  onClick={() => setActiveOption(idx)}
                  />
                )
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
            <LinkButton
              hasArrow
              label="Add to pot"
              href="#"
              className="product-hero__btn"
            />
          </div>
        </div>
      </ProductHeroWrapper>
    </ProductHeroStyled>
  );
};

export default ProductHero;
