import styled, { css } from 'styled-components';

const HeaderSearchStyled = styled.div`
  ${({ theme }) => {
  return css`
      max-width: 570px;
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      @media ${theme.mq.laptop} {
        height: 80px;
      }
    .header-search__input-wrapper, 
    .header-search__input  {
      width: 100%;
      height: 100%;
    }
    .header-search__input {
      font-size: inherit;
      font-family: inherit;
      color: ${theme?.colors?.neutral_white};
      background-color: ${theme?.colors?.secondary};
      border: none;
      padding: 24px;
      ::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
      ::-webkit-input-placeholder {
        color: ${theme?.colors?.secondary_light};
      }
      ::-moz-placeholder {
        color: ${theme?.colors?.secondary_light};
      }
      :-ms-input-placeholder {
        color: ${theme?.colors?.secondary_light};
      }
      :-moz-placeholder {
        color: ${theme?.colors?.secondary_light};
      }
    }
  `;
  }};
`;

export default HeaderSearchStyled;
