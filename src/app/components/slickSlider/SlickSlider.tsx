import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
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
  arrowColor?: string;
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
  arrowColor = '#77E8C6',
}: Props) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  const settings = {
    afterChange: afterChangeFunc,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: false,
    swipeToSlide,
    draggable,
    asNavFor: '.slider-nav',
    nextArrow: <SlickArrow type="chevron-right" color={arrowColor} />,
    prevArrow: <SlickArrow type="chevron-left" color={arrowColor} />,
    responsive,
  };

  const thumbsSlidesToShow = slides.length >= 6 ? 6 : 2;
  const settingsThumbs = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: thumbsSlidesToShow,
    arrows: false,
    centerMode: true,
    adaptiveHeight: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: sizesNoUnit.mobile,
        settings: {
          slidesToShow: slides.length >= 6 ? 2 : 1,
        },
      },
      {
        breakpoint: sizesNoUnit.tablet,
        settings: {
          slidesToShow: slides.length >= 6 ? 3 : 2,
        },
      },
      {
        breakpoint: sizesNoUnit.laptop,
        settings: {
          slidesToShow: slides.length >= 6 ? 4 : 2,
        },
      },
      {
        breakpoint: sizesNoUnit.xlargeDesktop,
        settings: {
          slidesToShow: slides.length >= 6 ? 6 : 2,
        },
      },
    ],
  };

  useEffect(() => {
    if (hasNav) {
      setNav1(slider1);
      setNav2(slider2);
    }
  }, [hasNav, slider1, slider2]);

  if (!slides || slides.length < 1) return null;
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
                return (
                  <Card key={idx} className="slick__product-slide" {...slide} />
                );
              }
              case 'default': {
                return (
                  <Slide
                    key={idx}
                    hasScrollImage={hasScrollImage}
                    className="slick__main-slide"
                    height={600}
                    width={800}
                    {...slide}
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
                  {...slide}
                  width={120}
                  height={120}
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
