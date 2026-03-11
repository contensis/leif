import React, { useState } from 'react';

import SlickSlider from '../slickSlider/SlickSlider';
import TestimonialSliderStyled from './TestimonialSlider.styled';

export interface Props {
  className?: string;
  testimonials: any;
}

const TestimonialSlider = ({ className, testimonials }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const updateCurrentSlide = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  if (!testimonials || testimonials.length < 1) return null;

  return (
    <TestimonialSliderStyled className={className}>
      <div className="testimonial-slider__wrapper">
        <SlickSlider
          type="testimonial"
          slides={testimonials}
          className="testimonial-slider__slider"
          afterChangeFunc={updateCurrentSlide}
          arrowColor="var(--semantic-brand-primary)"
        />
        <div className="testimonial__pagination" aria-hidden="true">
          {testimonials.map((_: any, idx: number) => (
            <span
              key={idx}
              className={`testimonial__dot${idx === currentSlide ? ' testimonial__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </TestimonialSliderStyled>
  );
};

export default TestimonialSlider;
