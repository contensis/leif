import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  hasLargeStyles: boolean;
}

const BasketItemStyled = styled.div`
  ${({ theme, hasLargeStyles }: Props) => {
    return css`
      position: relative;
      padding: 0 24px 16px 0;
      .basket-item__content--wrapper {
        display: flex;
        align-items: stretch;
      }
      .basket-item__content {
        margin-left: 8px;
        span {
          display: block;
        }
      }
      .basket-item__image {
        height: 88px;
        width: 80px;
        border-radius: 4px;
        object-fit: cover;
      }
      .basket-item__title {
        ${theme.typeStyles.h6};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
        margin-bottom: 8px;
      }
      .basket-item__variant {
        ${theme.typeStyles.smallCopy};
        margin-bottom: 8px;
      }
      .basket-item__price {
        ${theme.typeStyles.h6};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary_light};
        margin: 0;
      }
      .basket-item__input--wrapper {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: -40px;
        left: 0;
      }
      .basket-item__input {
        margin-right: 16px;
        input {
          width: 84px;
          height: 40px;
        }
      }
      .basket-item__input-minus {
        margin-right: 8px;
      }
      .basket-item__btn--close {
        background: transparent;
        border: none;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 0.6;
        }
      }
      ${hasLargeStyles &&
      css`
        max-width: 620px;
        width: 100%;
        @media ${theme.mq.laptop} {
          padding: 0;
        }
        .basket-item__content {
          @media ${theme.mq.laptop} {
            margin-left: 16px;
          }
        }
        .basket-item__title {
          @media ${theme.mq.laptop} {
            ${theme.typeStyles.h5};
          }
        }
        .basket-item__image {
          @media ${theme.mq.laptop} {
            height: 176px;
            width: 180px;
          }
        }
        .basket-item__input--wrapper {
          @media ${theme.mq.laptop} {
            margin: 8px 0 0 0;
            position: relative;
            bottom: auto;
            left: auto;
          }
        }
      `}
    `;
  }};
`;

export default BasketItemStyled;
