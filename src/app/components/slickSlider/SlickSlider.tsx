import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import Slider from 'react-slick';

import SlickSliderStyled from './SlickSlider.styled';
import Slide from '../slickSlide/Slide';
import SlickArrow from '../slickArrow/SlickArrow';
import Icon from '../icon/Icon';

interface Props {
  slides: any[] | any;
  hasNav?: boolean
}

const SlickSlider: React.FC<Props> = ({ slides, hasNav = false }) => {
  if (!slides) return null;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    centerMode: false,
    swipeToSlide: true,
    asNavFor: '.slider-nav',
    nextArrow: <SlickArrow type="chevronRight" />,
    prevArrow: <SlickArrow type="chevronLeft" />,
  };

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    centerPadding: '12px'
  }

  useEffect(() => {
    if (hasNav) {
      setNav1(slider1);
      setNav2(slider2);
    }
  }, [slider1, slider2]);

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
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
          className="slider-for"
        >
          {slides.map((slide: any, idx: number) => {
            return <Slide key={idx} image={slide} className="slick__slide" />
          })}
        </Slider>
        {hasNav && (
          <Slider
          {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}
            className="slider-nav"
          >
            {slides.map((slide: any, idx: number) => {
              return <Slide key={idx} image={slide} className="slick__slide-thumbnail" />
            })}
          </Slider>
        )}
        </SlickSliderStyled>
      </>
  );
};

SlickSlider.propTypes = {
  slides: PropTypes.array,
};

export default SlickSlider;
