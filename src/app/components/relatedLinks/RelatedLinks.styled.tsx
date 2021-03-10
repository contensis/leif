import styled, { css } from 'styled-components';

const RelatedLinksStyled = styled.div`
  ${({ theme }) => {
    return css`
      ul li {
        &:before {
          display: none;
        }
      }
      .related-links__title {
        ${theme.typeStyles.h4}
        margin-bottom: 40px;
      }
      .related-links__image {
        max-width: 74px;
        width: 100%;
        height: 80px;
        border-radius: 4px;
        object-fit: cover;
      }
      .related-links__link {
        color: ${theme.colors.secondary};
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      .related-links__link-title {
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h5};
        display: block;
        margin-left: 16px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          &:not(:first-child) {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid ${theme.colors.neutral_lightgrey};
          }
        }
      }
    `;
  }};
`;

export default RelatedLinksStyled;
