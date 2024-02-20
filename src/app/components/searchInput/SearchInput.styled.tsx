import styled, { css } from 'styled-components';

const SearchInputStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 510px;
      width: 100%;
      position: relative;
      .search-input__input {
        color: var(--semantic-type-secondary);
        ${theme.typeStyles.cardCopy};
        padding: 16px 40px 16px 16px;
        width: 100%;
        border: none;
        background: rgba(195, 198, 222, 0.1);
        border: 1px solid var(--semantic-type-secondary);
        border-radius: 8px;
        ::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
        ::-webkit-input-placeholder {
          color: var(--semantic-type-secondary);
        }
        ::-moz-placeholder {
          color: var(--semantic-type-secondary);
        }
        :-ms-input-placeholder {
          color: var(--semantic-type-secondary);
        }
        :-moz-placeholder {
          color: var(--semantic-type-secondary);
        }
      }
      .search-input__btn {
        padding: 0;
        line-height: 0;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
      }
    `;
  }};
`;

export default SearchInputStyled;
