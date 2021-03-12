import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  showFilters: boolean;
}

const FiltersStyled = styled.div`
  ${({ theme, showFilters }: Props) => {
    return css`
      .filters__toggle-btn {
        max-width: 288px;
        margin: 0 auto;
        @media ${theme.mq.laptop} {
          display: none;
        }
      }
      .filters__wrapper {
        margin: 0 auto;
        display: ${showFilters ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media ${theme.mq.laptop} {
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
        }
      }
      .filter__dropdown {
        max-width: 288px;
        width: 100%;
        margin: 24px 0 0 0;
        @media ${theme.mq.laptop} {
          margin: 0;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
    `;
  }};
`;

export default FiltersStyled;
