import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  align: string;
  hasSVG: boolean;
}

const FeaturedCTAStyled = styled.div`
  ${({ theme, align, hasSVG }: Props) => {
  return css`
    position: relative;
    overflow-x: hidden;
    padding-bottom: 120px;
    @media ${theme.mq.laptop} {
      display: flex;
      align-items: center;
      flex-direction: ${align === 'left' ? 'row' : 'row-reverse'}
      height: 800px;
      padding-bottom: 0;
    }  
    .featured-cta__image {
      height: 440px;
      width: 100%;
      object-fit: cover;
      @media ${theme.mq.laptop} {
        height: auto;
        width: 50%;
      }
    }
    .featured-cta__content {
      background-color: ${theme?.colors?.neutral_white};
      position: relative;
      padding: 40px 16px;
      margin: -50% 0 0 0;
      margin-${align}: 32px;
      box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
      border-radius: ${align === "left" ? '8px 0 0 0' : '0 8px 0 0'};
      &:before {
        display: ${hasSVG ? 'block' : 'none'};
        content: '';
        background-image: url('/static/img/svgs/generic-hero-shape.svg');
        height: 80px;
        width: 100%;
        position: absolute;
        bottom: -120px;
        ${align === 'left' ? 'right' : 'left'}: 0;
      }
      @media ${theme.mq.laptop} {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 0;
        box-shadow: none;
        padding: 0;
        margin: ${align === 'left' ? '0 0 0 8%' : '0 8% 0 0'};
        &:before {
          bottom: 0;
        }
      }
    }
    .featured-cta__wrapper {
      @media ${theme.mq.laptop} {
        max-width: 400px;
      }
    }
    .featured-cta__link {
      margin-top: 24px;
    }
    .featured-cta__title {
      margin: 0 0 16px 0;
    }
    .featured-cta__text {
      p, ul {
        margin: 0 0 16px 0;
      }
    }
  `;
  }};
`;

export default FeaturedCTAStyled;
