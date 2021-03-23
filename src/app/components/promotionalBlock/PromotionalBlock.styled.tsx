import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  align: string;
  isModalOpen?: boolean;
}

const PromotionalBlockStyled = styled.div`
  ${({ theme, align, isModalOpen }: Props) => {
    return css`
    position: relative;
    overflow-x: hidden;
    padding-bottom: 120px;
    @media ${theme.mq.laptop} {
      display: ${isModalOpen ? 'block' : 'flex'};
      align-items: center;
      flex-direction: ${align === 'left' ? 'row' : 'row-reverse'};
      height: 800px;
      padding-bottom: 0;
    }  
    .featured-cta__image-wrapper {
      position: relative;
      height: 100%;
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
        flex-basis: 50%;
      }
    }
    .featured-cta__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .featured-cta__video-player > div:first-child {
      margin: 0 auto;
      padding: 40px 0;
    }
    .featured-cta__video-btn-close {
      background: transparent;
      padding: 0;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
    }
    .featured-cta__video-btn-open {
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
    .featured-cta__content {
      text-align: ${align === 'left' ? 'right' : 'left'};
      background-color: ${theme.colors.neutral_white};
      position: relative;
      padding: 40px 16px;
      margin: -24% 0 0 0;
      margin-${align}: 32px;
      box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
      border-radius: ${align === 'left' ? '8px 0 0 0' : '0 8px 0 0'};
      &:before {
        display: ${align === 'left' ? 'block' : 'none'};
        content: '';
        background-image: url('/static/img/svgs/shapes/promotional-block-shape.svg');
        background-repeat: no-repeat;
        background-position: bottom;
        height: 100%;
        width: 100%;
        position: absolute;
        bottom: -120px;
        right: 0;
      }
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
      margin: ${align === 'left' ? '24px 0 0 auto' : '24px auto 0 0'};
      @media ${theme.mq.laptop} {
        margin: 24px 0 0 0;
      }
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

export default PromotionalBlockStyled;
