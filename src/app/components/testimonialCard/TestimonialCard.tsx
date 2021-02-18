import React from 'react';

import TestimonialCardStyled from './TestimonialCard.styled';
import Image from '../image/Image';

interface Props {
  className?: string;
  quote: string;
  person: any;
}

const TestimonialCard = ({ className, quote, person }: Props) => {
  const avatar = person?.photo;
  return (
    <TestimonialCardStyled className={className}>
      <p className="testimonial-card__quote">{quote}</p>
      {person && (
        <>
          <Image image={avatar} className="testimonial-card__photo" />
          <span className="testimonial-card__name">{person.name}</span>
        </>
      )}
    </TestimonialCardStyled>
  );
}

export default TestimonialCard;
