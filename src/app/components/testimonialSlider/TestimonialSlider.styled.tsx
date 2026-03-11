import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
}

const TestimonialSliderStyled = styled.div`
  ${({ theme }: Props) => {
    return css`
      background-color: var(--semantic-background-warm);
      padding: 80px 16px;
      @media ${theme.mq.desktop} {
        padding: 96px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .testimonial-slider__wrapper {
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        &:before {
          content: '\u201C';
          display: block;
          font-family: 'Source Serif 4', serif;
          font-size: 6rem;
          line-height: 1;
          color: var(--semantic-brand-primary);
          margin-bottom: 16px;
        }
      }
      .testimonial__pagination {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 32px;
      }
      .testimonial__dot {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--semantic-charcoal-secondary);
        transition: background-color 200ms ease-out;
      }
      .testimonial__dot--active {
        background-color: var(--semantic-brand-primary);
      }
      .slick-next,
      .slick-prev {
        bottom: 64px;
        top: auto;
        background-color: transparent;
        border: 1px solid var(--semantic-brand-primary);
        svg path {
          fill: var(--semantic-brand-primary);
        }
        @media ${theme.mq.desktop} {
          bottom: auto;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .slick-next {
        @media ${theme.mq.desktop} {
          right: -110px;
        }
      }
      .slick-prev {
        @media ${theme.mq.desktop} {
          left: -110px;
        }
      }
    `;
  }};
`;

export default TestimonialSliderStyled;
