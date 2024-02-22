import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      --a11y: #4c9aff;
      --semantic-type-primary: #2b2f51;

      position: relative;
      padding: 24px 16px;
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

      .blog-card__img {
        margin-bottom: 24px;
        width: 100%;
        height: 304px;
      }

      .blog-card__path {
        color: var(--semantic-type-primary);
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          inset: 0;
        }
      }

      .blog-card__title {
        margin-bottom: 24px;
        ${theme.typeStyles.h4};
      }

      .blog-card__text {
        margin: 0;
      }

      .blog-card__detail {
        margin-top: 24px;
      }
    `;
  }};
`;
