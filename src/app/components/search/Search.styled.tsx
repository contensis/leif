import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  noResults?: boolean;
}

const SearchStyled = styled.div`
  ${({ theme, noResults }: Props) => {
    return css`
      padding: 0 0 120px;
      .search__title {
        text-align: center;
        position: relative;
        color: ${theme.colors.secondary};
        @media ${theme.mq.laptop} {
          text-align: left;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 320px;
            background-image: url('/static/img/svgs/shapes/footer-shape.svg');
            background-repeat: no-repeat;
            background-position: top right;
          }
        }
      }
      .search__header {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin: 40px 0 80px;
        @media ${theme.mq.desktop} {
          justify-content: space-between;
          flex-direction: row;
          margin-top: 56px;
        }
      }
      .search__results-info--text {
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
        margin: 0 0 80px 0;
      }
      .search__facets {
        width: 100%;
        margin-top: 40px;
        @media ${theme.mq.desktop} {
          margin: 0;
        }
      }
      .search__facets .filters__wrapper {
        justify-content: center;
        @media ${theme.mq.desktop} {
          justify-content: flex-start;
        }
      }
      .filter__facet {
        ${theme.typeStyles.smallCopy};
        font-family: ${theme.typeStyles.fontFamily.default};
        max-width: 130px;
        max-width: 288px;
        width: 100%;
        margin: 24px 0 0 0;
        @media ${theme.mq.desktop} {
          max-width: 130px;
          padding: 8px 16px;
          margin: 0;
          &:not(:last-child) {
            margin: 0 24px 0 0;
          }
        }
      }
      .search__featured-products {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        max-width: 300px;
        width: 100%;
        a {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
        }
      }
      .search__results {
        max-width: 660px;
        width: 100%;
      }
      .search__result-card {
        &:not(:last-child) {
          padding-bottom: 32px;
          margin-bottom: 40px;
          border-bottom: 1px solid ${theme.colors.neutral_lightgrey};
        }
      }
      .search__results-wrapper {
        display: flex;
        justify-content: space-between;
      }
      .search__filters {
        width: 320px;
        .filter__dropdown {
          &:not(:last-child) {
            margin: 0 0 40px 0;
          }
        }
        .filters__wrapper {
          align-items: flex-end;
          flex-direction: column;
        }
        @media ${theme.mq.desktop} {
          margin-left: auto;
        }
      }
      .search__load-more {
        margin: 80px auto 0;
        @media ${theme.mq.desktop} {
          margin-top: 120px;
        }
      }
      .search__explore-more {
        margin-top: 56px;
        @media ${theme.mq.desktop} {
          margin-top: 80px;
        }
      }
      ${noResults &&
      css`
        .search__results-wrapper {
          justify-content: center;
        }
      `}
    `;
  }};
`;

export default SearchStyled;
