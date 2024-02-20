import styled, { css } from 'styled-components';
import Link from '../link/Link';

interface Props {
  theme?: any;
  type: string;
}

const SearchCardStyled = styled(Link)`
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
        width: 100%;
        height: 80px;
        margin-right: 16px;
        @media ${theme.mq.laptop} {
          min-width: 110px;
          height: 120px;
        }
      }
      h2 {
        ${theme.typeStyles.h5};
        color: var(--semantic-link-primary);
        margin: 0 0 8px 0;
      }
      .search-card__text {
        display: ${!type ? 'block' : 'none'};
        color: var(--semantic-charcoal-primary);
        margin: 0 0 8px 0;
        @media ${theme.mq.laptop} {
          display: block;
        }
      }
      .search-card__detail {
        color: var(--semantic-type-secondary);
      }
      ${type === 'product' &&
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
