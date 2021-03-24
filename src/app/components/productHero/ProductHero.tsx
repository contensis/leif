import React, { useState } from 'react';

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
import FocusLock from 'react-focus-lock';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import { _noScroll } from '../../utils/noScroll';
import Button from '../button/Button';
export interface Props {
  className?: string;
  id: any;
  slides: any[] | any;
  rating?: string;
  title: string;
  text?: string;
  price: number;
  options?: any;
  basket: any;
  _addToBasket: (
    id: number,
    opt: string,
    title: string,
    quantity: number
  ) => void;
}

const ProductHero = ({
  className,
  id,
  slides,
  rating,
  title,
  text,
  price,
  options,
  basket,
  _addToBasket,
}: Props) => {
  let [quantity, updateQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>('opt-1');

  const _handleClick = (e: any, type: string) => {
    e.preventDefault();
    if (type === 'increase') {
      updateQuantity((quantity += 1));
    } else {
      updateQuantity(quantity === 0 ? 0 : (quantity -= 1));
    }
  };
  _noScroll(isModalOpen);

  console.info({ basket });

  return (
    <ProductHeroStyled className={className} isModalOpen={isModalOpen}>
      <Wrapper
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
                  <Icon type="close" />
                  <VisuallyHidden text="Close" />
                </button>
              </div>
            </FocusLock>
          </>
        )}
      >
        <BackButton label="All products" uri="/" />
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
              <Rating rating={rating} />
              <SocialShare className="product-hero__socials" />
            </div>
            <h1 className="product-hero__title">{title}</h1>
            {text && <p className="product-hero__text">{text}</p>}
            <span className="product-hero__price">£{price}</span>
            <div className="product-hero__options">
              {options &&
                options.map((opt: any, idx: number) => {
                  return (
                    <LinkButton
                      key={idx}
                      label={opt.title}
                      href="#"
                      type="secondary"
                      isHollow={activeOption === opt.key ? false : true}
                      className="product-hero__option"
                      onClick={() => setActiveOption(opt.key)}
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
              label="Add to pot"
              onClick={() => {
                _addToBasket(id, activeOption, title, quantity);
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
