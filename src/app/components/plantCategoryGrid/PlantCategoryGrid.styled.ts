import styled, { css } from 'styled-components';

export default styled.section`
  ${({ theme }) => {
    return css`
      background-color: var(--semantic-background-primary);
      padding: 80px 16px;
      @media ${theme.mq.desktop} {
        padding: 120px 40px;
      }
      .plant-category-grid__inner {
        max-width: 1200px;
        margin: 0 auto;
      }
      .plant-category-grid__title {
        text-align: center;
        margin-bottom: 56px;
        @media ${theme.mq.desktop} {
          margin-bottom: 64px;
        }
      }
      .plant-category-grid__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        @media ${theme.mq.tablet} {
          grid-template-columns: repeat(2, 1fr);
        }
        @media ${theme.mq.desktop} {
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
      }
      .plant-category-grid__card {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 200ms ease-out;
        &:hover {
          transform: translateY(-4px);
        }
        &:focus-within {
          outline: 2px solid var(--semantic-link-primary);
          outline-offset: 2px;
        }
      }
      .plant-category-grid__image {
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        display: block;
      }
      .plant-category-grid__card-body {
        padding: 20px 0 8px;
      }
      .plant-category-grid__card-title {
        ${theme.typeStyles.h4};
        color: var(--semantic-type-primary);
        margin: 0 0 8px;
      }
      .plant-category-grid__card-description {
        ${theme.typeStyles.smallCopy};
        color: var(--semantic-charcoal-primary);
        margin: 0;
      }
      .plant-category-grid__card-link {
        color: inherit;
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          inset: 0;
        }
        &:focus {
          outline: none;
        }
      }
    `;
  }};
`;
