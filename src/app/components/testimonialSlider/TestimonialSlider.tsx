import React from 'react';

import TestimonialSliderStyled from './TestimonialSlider.styled';

interface Props {
  className?: string;
  testimonials: any;
  bgImage?: string;
}

const TestimonialSlider = ({ className, testimonials, bgImage }: Props) => {
  if (!testimonials || testimonials.length < 1) return null;
  return (
    <TestimonialSliderStyled className={className} bgImage={bgImage}>
      {/* <Slider type="testimonial" slides={testimonials} /> */}
    </TestimonialSliderStyled>
  );
};

export default TestimonialSlider;
