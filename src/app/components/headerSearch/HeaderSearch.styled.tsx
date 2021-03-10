import styled, { css } from 'styled-components';

const HeaderSearchStyled = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      .header-search__input-wrapper {
        position: relative;
        height: 64px;
        max-width: 570px;
        width: 100%;
        @media ${theme.mq.laptop} {
          height: 80px;
        }
      }
      .header-search__input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        color: ${theme.colors.neutral_white};
        background-color: ${theme.colors.secondary};
        border: none;
        padding: 24px;
        ::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
        ::-webkit-input-placeholder {
          color: ${theme.colors.secondary_light};
        }
        ::-moz-placeholder {
          color: ${theme.colors.secondary_light};
        }
        :-ms-input-placeholder {
          color: ${theme.colors.secondary_light};
        }
        :-moz-placeholder {
          color: ${theme.colors.secondary_light};
        }
        @media ${theme.mq.laptop} {
          max-width: 570px;
        }
      }
    `;
  }};
`;

export default HeaderSearchStyled;
