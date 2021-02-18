import styled, { css } from 'styled-components';

const TestimonialCardStyled = styled.div`
  ${({ theme }) => {
  return css`
    position: relative;
    text-align: center;
    color: ${theme?.colors?.neutral_white};
    font-family: ${theme?.typeStyles?.fontFamily?.headings};
    padding: 72px 16px 176px;
    @media ${theme.mq.desktop} {
      padding: 16px;
    }
    .testimonial-card__quote {
      ${theme?.typeStyles?.h4};
      margin: 0 0 24px;
    }
    .testimonial-card__photo {
      height: 40px;
      max-width: 40px;
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 16px;
    }
    .testimonial-card__name {
      ${theme?.typeStyles?.h6};
    }
  `;
  }};
`;

export default TestimonialCardStyled;
