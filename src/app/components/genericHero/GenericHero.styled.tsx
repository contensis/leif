import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          .generic-hero__title {
            text-decoration: underline;
          }
          .generic-hero__btn {
            border-radius: 4px;
            border: 1px solid #2b2f51;
            background: rgba(195, 198, 222, 0.2);
          }
        }
      }

      [data-hero='two-column'] {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        max-width: 1060px;
        width: 100%;
        margin: 0 auto;
        @media ${theme.mq.largeDesktop} {
          align-items: center;
          grid-template-columns: repeat(auto-fit, minmax(476px, 1fr));
        }
      }

      [data-hero='product-hero'] {
        .generic-hero__container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: 1060px;
          width: 100%;
          margin: 0 auto;
          @media ${theme.mq.largeDesktop} {
            grid-template-columns: repeat(auto-fit, minmax(476px, 1fr));
          }
        }
      }

      .generic-hero__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        max-width: 840px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        @media ${theme.mq.largeDesktop} {
          text-align: left;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }

      .generic-hero__text {
        margin-top: 16px;
      }

      .generic-hero__price {
        color: #6e729b;
        ${theme.typeStyles.h4};
        font-family: ${theme.typeStyles.fontFamily.headings};
      }

      .generic-hero__info {
        margin-top: 16px;
      }

      .generic-hero__info span {
        &:not(:first-child) {
          margin-left: 8px;
          &:before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 8px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="%2339B38E" /></svg>');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            margin-right: 8px;
          }
        }
      }

      .generic-hero__content svg {
        margin-bottom: 24px;
        align-self: center;
        @media ${theme.mq.largeDesktop} {
          align-self: flex-start;
        }
      }

      .generic-hero__nav--back {
        margin-bottom: 24px;
        align-self: flex-start;
      }

      .generic-hero__img {
        height: 100%;
        max-width: 510px;
        width: 100%;
        aspect-ratio: 1/1;
        margin: 0 auto;
      }

      .generic-hero__info {
        ${theme.typeStyles.smallCopy};
        color: #6e729b;
      }

      .generic-hero__btn {
        border-radius: 4px;
        border: 1px solid #2b2f51;
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        padding: 16px;
        transition: background 200ms ease-in-out;
        margin-top: 24px;
        min-width: 256px;
        text-align: center;
      }
    `;
  }};
`;
