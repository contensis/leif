import React, { useEffect, useState } from 'react';

import Helmet from 'react-helmet';
import Slider from 'react-slick';

import SlickSliderStyled from './SlickSlider.styled';
import SlickArrow from '../slickArrow/SlickArrow';

import Slide from '../slickSlide/Slide';
import TestimonialCard from '../testimonialCard/TestimonialCard';
import Card from '../card/Card';

import { sizesNoUnit } from '../../theme/global/layout';

export interface Props {
  className?: string;
  slides: any[] | any;
  hasNav?: boolean;
  hasScrollImage?: boolean;
  swipeToSlide?: boolean;
  draggable?: boolean;
  type?: 'default' | 'testimonial' | 'card';
  slidesToShow?: number;
  responsive?: any;
  afterChangeFunc?: (currentSlide: number) => void;
}

const SlickSlider = ({
  className,
  slides,
  hasNav = false,
  hasScrollImage,
  swipeToSlide = true,
  draggable = true,
  type = 'default',
  afterChangeFunc,
  slidesToShow = 1,
  responsive,
}: Props) => {
  if (!slides || slides.length < 1) return null;

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  const settings = {
    afterChange: afterChangeFunc,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: false,
    swipeToSlide: swipeToSlide,
    draggable: draggable,
    asNavFor: '.slider-nav',
    nextArrow: <SlickArrow type="chevronRight" />,
    prevArrow: <SlickArrow type="chevronLeft" />,
    responsive: responsive,
  };

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    centerMode: true,
    adaptiveHeight: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: sizesNoUnit['mobile'],
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: sizesNoUnit['tablet'],
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: sizesNoUnit['laptop'],
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: sizesNoUnit['xlargeDesktop'],
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

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
      <SlickSliderStyled className={className}>
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={slider => setSlider1(slider)}
          className="slider-for"
        >
          {slides.map((slide: any, idx: number) => {
            switch (type) {
              case 'testimonial': {
                return (
                  <TestimonialCard
                    key={idx}
                    className="slick__testimonial-slide"
                    {...slide}
                  />
                );
              }
              case 'card': {
                return <Card className="slick__product-slide" {...slide} />;
              }
              case 'default': {
                return (
                  <Slide
                    key={idx}
                    image={slide}
                    hasScrollImage={hasScrollImage}
                    className="slick__main-slide"
                  />
                );
              }
              default:
                break;
            }
          })}
        </Slider>
        {hasNav && (
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => setSlider2(slider)}
            className="slider-nav"
          >
            {slides.map((slide: any, idx: number) => {
              return (
                <Slide
                  key={idx}
                  image={slide}
                  className="slick__slide-thumbnail"
                />
              );
            })}
          </Slider>
        )}
      </SlickSliderStyled>
    </>
  );
};

export default SlickSlider;
