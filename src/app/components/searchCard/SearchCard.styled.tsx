import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  type: string;
}

const SearchCardStyled = styled.a`
  ${({ theme, type }: Props) => {
    return css`
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover {
        h2 {
          text-decoration: underline;
        }
      }
      .search-card__image {
        max-width: 74px;
        height: 80px;
        width: 100%;
        object-fit: cover;
        margin-right: 16px;
        @media ${theme.mq.laptop} {
          max-width: 110px;
          height: 120px;
        }
      }
      h2 {
        ${theme.typeStyles.h5};
        color: ${theme.colors.link};
        margin: 0 0 8px 0;
      }
      .search-card__text {
        display: ${!type ? 'block' : 'none'};
        color: ${theme.colors.neutral_charcoal};
        margin: 0 0 8px 0;
        @media ${theme.mq.laptop} {
          display: block;
        }
      }
      .search-card__detail {
        color: ${theme.colors.secondary_light};
      }
      ${(type === 'plant' || type === 'pot') &&
        css`
          .search-card__detail {
            ${theme.typeStyles.h5};
            font-family: ${theme.typeStyles.fontFamily.headings};
            margin: 0 0 8px 0;
          }
          .search-card__text {
            margin: 0;
          }
          .search-card__image {
            border-radius: 4px;
          }
        `}
    `;
  }};
`;

export default SearchCardStyled;
