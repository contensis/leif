import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  align: string;
}

const FeaturedCTAStyled = styled.div`
  ${({ theme, align }: Props) => {
  return css`
    position: relative;
    overflow-x: hidden;
    padding-bottom: 120px;
    @media ${theme.mq.laptop} {
      display: flex;
      align-items: center;
      /* justify-content: ; */
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
        margin-${align === 'left' ? 'right' : 'left'}: 32px;
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
      @media ${theme.mq.laptop} {
        max-width: 400px;
        border-radius: 0;
        box-shadow: none;
        padding: 0;
        margin: 0 auto;
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
