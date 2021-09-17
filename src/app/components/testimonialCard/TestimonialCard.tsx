import React from 'react';

import TestimonialCardStyled from './TestimonialCard.styled';
import Image from '../image/Image';

interface Props {
  className?: string;
  quote: string;
  photo: string;
  name: string;
}

const TestimonialCard = ({ className, quote, photo, name }: Props) => {
  return (
    <TestimonialCardStyled className={className}>
      <p className="testimonial-card__quote">{quote}</p>
      {photo && (
        <div className="testimonial-card__image-wrapper">
          <Image
            src={photo}
            alt={`Photo of ${name}`}
            className="testimonial-card__photo"
            width={40}
            height={40}
          />
          <span className="testimonial-card__name">{name}</span>
        </div>
      )}
    </TestimonialCardStyled>
  );
};

export default TestimonialCard;
