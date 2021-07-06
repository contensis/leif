import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
}

const TestimonialSliderStyled = styled.div`
  ${({ theme }: Props) => {
    return css`
      background-color: ${theme.colors.secondary};
      background-image: url('/static/img/backgrounds/testimonial-slider-background.jpeg');
      background-size: cover;
      background-position: center;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.secondary};
        opacity: 0.9;
      }
      @media ${theme.mq.desktop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 600px;
      }
      .testimonial-slider__wrapper {
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
        &:before {
          content: '';
          position: absolute;
          top: -24px;
          left: 50%;
          height: 160px;
          width: 12px;
          transform: rotate(90deg);
          background-image: url('/static/img/svgs/shapes/quote-block-shape.svg');
          background-repeat: no-repeat;
        }
        @media ${theme.mq.desktop} {
          &:before {
            top: 32px;
          }
        }
      }
      .testimonial__pagination {
        text-align: center;
        color: ${theme.colors.primary};
        ${theme.typeStyles.smallCopy};
        position: absolute;
        bottom: 132px;
        left: 50%;
        transform: translateX(-50%);
        @media ${theme.mq.desktop} {
          position: relative;
          bottom: auto;
          left: auto;
          transform: unset;
        }
      }
      .slick-next,
      .slick-prev {
        bottom: 64px;
        top: auto;
        background-color: ${theme.colors.neutral_white};
        svg path {
          fill: ${theme.colors.secondary};
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
