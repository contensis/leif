import styled, { css } from 'styled-components';

export default styled.div`
  ${() => {
    return css`
      --a11y: #4c9aff;

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

      .explore-more__image {
        margin-bottom: 24px;
        width: 100%;
      }

      .explore-more__path {
        color: #2b2f51;
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          inset: 0;
        }
      }
    `;
  }};
`;
