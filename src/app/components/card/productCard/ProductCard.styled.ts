import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      --a11y: #4c9aff;
      --semantic-tag-primary: #ff1f55;

      min-height: 488px;
      position: relative;
      background: var(--semantic-background-primary);
      padding: 16px;
      border-radius: 8px;
      transition: box-shadow 200ms ease-in-out;
      &:hover {
        cursor: pointer;
        box-shadow: 0 16px 24px 0 rgba(56, 33, 146, 0.07);
      }
      &:focus-within {
        box-shadow: none;
        outline: 2px solid var(--a11y);
        outline-offset: 2px;
        .explore-more__path {
          outline: none;
        }
      }

      .product-card__img--wrapper {
        position: relative;
      }

      .product-card__img {
        width: 100%;
        height: 280px;
        border-radius: 4px;
      }

      .product-card__tag {
        ${theme.typeStyles.smallCopy};
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 4px 0 0;
        background: var(--semantic-tag-primary);
        color: var(--semantic-background-primary);
        padding: 0 8px;
      }

      .product-card__icon {
        position: absolute;
        bottom: 24px;
        left: 8px;
      }

      .product-card__path {
        color: var(--semantic-type-primary);
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          inset: 0;
        }
      }

      .product-card__content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .product-card__title {
        margin-top: 24px;
        text-align: center;
        ${theme.typeStyles.h4};
      }

      .product-card__price {
        margin-top: 16px;
        ${theme.typeStyles.h4};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: var(--semantic-type-secondary);
      }

      .product-card__rating {
        margin-top: 16px;
      }
    `;
  }};
`;
