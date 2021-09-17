import styled, { css } from 'styled-components';

const TestimonialCardStyled = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      text-align: center;
      color: ${theme.colors.neutral_white};
      font-family: ${theme.typeStyles.fontFamily.headings};
      padding: 72px 16px 176px;
      @media ${theme.mq.desktop} {
        padding: 16px;
      }
      .testimonial-card__quote {
        ${theme.typeStyles.h4};
        margin: 0 0 24px;
      }
      .testimonial-card__image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .testimonial-card__photo {
        border-radius: 50%;
        object-fit: cover;
      }
      .testimonial-card__name {
        ${theme.typeStyles.h6};
        margin-top: 16px;
      }
    `;
  }};
`;

export default TestimonialCardStyled;
