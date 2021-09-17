import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  align: string;
  isModalOpen?: boolean;
  hasTrending?: boolean;
}

const PromotionalBlockStyled = styled.div`
  ${({ theme, align, isModalOpen, hasTrending }: Props) => {
    return css`
    position: relative;
    padding-bottom: 120px;
    @media ${theme.mq.laptop} {
      display: ${isModalOpen ? 'block' : 'flex'};
      align-items: center;
      flex-direction: ${align === 'left' ? 'row' : 'row-reverse'};
      height: 800px;
      padding-bottom: 0;
    }  
    .promoted-product__image-wrapper {
      position: relative;
      height: 440px;
      margin-top: 40px;
      &:before {
        display: ${align === 'right' ? 'block' : 'none'};
        content: '';
        background-image: url('/static/img/svgs/shapes/promotional-block-white-shape.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
      }
      @media ${theme.mq.laptop} {
        margin-top: 0;
        height: 100%;
        width: 50%;
      }
    }
    .promoted-product__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .promoted-product__video-player > div:first-child {
      margin: 0 auto;
      padding: 40px 0;
    }
    .promoted-product__video-btn-close {
      background: transparent;
      padding: 0;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
    }
    .promoted-product__video-btn-open {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none;
      background: transparent;
      padding: 0;
      transition: opacity 100ms ease-in-out;
      &:hover {
        opacity: .8;
      }
    }
    .promoted-product__content {
      display: flex; 
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin: -24% 0 0 0;
      margin-${align}: 32px;
      &:before {
        display: ${align === 'left' ? 'block' : 'none'};
        content: '';
        background-image: url('/static/img/svgs/shapes/promotional-block-shape.svg');
        background-repeat: no-repeat;
        background-position: bottom right;
        height:  120px;
        width: 100%;
        position: absolute;
        bottom: -120px;
        right: 0;
      }
      @media ${theme.mq.laptop} {
        margin: ${align === 'left' ? '0 0 0 8%' : '0 8% 0 0'};
          &:before {
          bottom: 0;
        }
      }
    }
    .promoted-product__content--text {
      text-align: ${align === 'left' ? 'right' : 'left'};
      background-color: ${theme.colors.neutral_white};
      position: relative;
      padding: 40px 16px;
      box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
      border-radius: ${align === 'left' ? '8px 0 0 0' : '0 8px 0 0'};
      @media ${theme.mq.laptop} {
        text-align: left;
        flex-basis: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: ${align === 'left' ? 'flex-start' : 'flex-end'};
        width: 100%;
        height: 100%;
        border-radius: 0;
        box-shadow: none;
        padding: 0;
      }
    }
    .promoted-product__wrapper {
      @media ${theme.mq.laptop} {
        max-width: 400px;
      }
    }
    .promoted-product__link {
      margin: ${align === 'left' ? '24px 0 0 auto' : '24px auto 0 0'};
      @media ${theme.mq.laptop} {
      margin: 24px auto 0 0;
      }
    }
    .promoted-product__title {
      ${theme.typeStyles.h3};
      margin: 0 0 16px 0;
    }
    .promoted-product__text {
      p, ul {
        margin: 0 0 16px 0;
      }
    }
    .promoted-product__trending {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 40px;
      @media ${theme.mq.laptop} {
        margin-top: 0;
        position: unset;
        top: unset;
        left: unset;
      }
    } 
    ${
      hasTrending &&
      css`
        padding-top: 80px;
        @media ${theme.mq.laptop} {
          padding-top: 0;
        }
      `
    }
  `;
  }};
`;

export default PromotionalBlockStyled;
