import React from 'react';

import CardSliderStyled from './CardSlider.styled';
import SlickSlider from '../slickSlider/SlickSlider';
import { sizesNoUnit } from '../../theme/global/layout';
import Image from '../image/Image';
import HeroContent from '../heroContent/HeroContent';

export interface Props {
  className?: string;
  title: string;
  text: string;
  cta?: any;
  imageUri: string;
  imageAlt: string;
  slides: any;
}

const CardSlider = ({
  className,
  title,
  text,
  cta,
  imageUri,
  imageAlt,
  slides,
}: Props) => {
  if (!slides || slides.length < 1) return null;
  const responsive = [
    {
      breakpoint: sizesNoUnit['tablet'],
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: sizesNoUnit['laptop'],
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: sizesNoUnit['xlargeDesktop'],
      settings: {
        slidesToShow: 3,
      },
    },
  ];
  return (
    <CardSliderStyled className={className}>
      <div className="card-slider__image-wrapper">
        <Image path={imageUri} alt={imageAlt} className="card-slider__image" />
        <div className="card-slider__image-overlay" />
      </div>
      <div className="card-slider__content-wrapper">
        <HeroContent
          className="card-slider__hero-content"
          title={title}
          text={text}
          cta={cta}
          btnIcon="product"
        />
        <div className="card-slider__slider">
          <SlickSlider
            type="card"
            slidesToShow={3}
            responsive={responsive}
            slides={slides}
            className="card-slider__slide"
          />
        </div>
      </div>
    </CardSliderStyled>
  );
};

export default CardSlider;
