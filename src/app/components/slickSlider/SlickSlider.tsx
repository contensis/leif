import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Slider from 'react-slick';

import SlickSliderStyled from './SlickSlider.styled';
import Slide from '../slickSlide/Slide';

interface Props {
  slides: any[] | any;
}

const SlickSlider: React.FC<Props> = ({ slides }) => {
  if (!slides) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    accessibility: true,
    swipeToSlide: true,
  };

  return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        </Helmet>
        <SlickSliderStyled>
        <Slider {...settings}>
          {slides.map((slide:any, idx:number) => {
            <Slide key={idx} image={slide.image} />
          })}
          </Slider>
        </SlickSliderStyled>
      </>
  );
};

SlickSlider.propTypes = {
  slides: PropTypes.array,
};

export default SlickSlider;
