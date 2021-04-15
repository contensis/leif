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
        -webkit-border-radius: 0;
        -webkit-box-shadow: none;
        border-radius: 0;
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
        -webkit-appearance: none;
        outline: 0;
        @media ${theme.mq.laptop} {
          max-width: 570px;
        }
      }
      .header-search__site-search--link {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
      }
      .header-search__results {
        margin-top: 60px;
        padding: 24px;
        background-color: ${theme.colors.neutral_white};
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
        .search-card__text {
          display: none;
        }
        @media ${theme.mq.laptop} {
          margin-top: 80px;
        }
      }
      .header-search__results a {
        &:not(:last-child) {
          padding-bottom: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid ${theme.colors.neutral_lightgrey};
        }
      }
      .header-search__results h2 {
        color: ${theme.colors.neutral_charcoal};
        ${theme.typeStyles.h5};
      }
    `;
  }};
`;

export default HeaderSearchStyled;
