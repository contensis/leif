import React, { useState } from 'react';

import SlickSlider from '../slickSlider/SlickSlider';
import TestimonialSliderStyled from './TestimonialSlider.styled';

export interface Props {
  className?: string;
  testimonials: any;
  bgImageUri?: string;
}

const TestimonialSlider = ({ className, testimonials, bgImageUri }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const updateCurrentSlide = (currentSlide: number) => {
    setCurrentSlide(currentSlide + 1);
  };
  const maxSlides = testimonials.length;

  if (!testimonials || testimonials.length < 1) return null;
  return (
    <TestimonialSliderStyled className={className} bgImageUri={bgImageUri}>
      <div className="testimonial-slider__wrapper">
        <SlickSlider
          type="testimonial"
          slides={testimonials}
          className="testimonial-slider__slider"
          afterChangeFunc={updateCurrentSlide}
          arrowColor="#2B2F51"
        />
        <div className="testimonial__pagination">
          {currentSlide} &#47; {maxSlides}
        </div>
      </div>
    </TestimonialSliderStyled>
  );
};

export default TestimonialSlider;
