import styled, { css } from 'styled-components';

const SocialShareStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      .ssIcon {
        margin-right: 32px;
        display: inline-block;
        line-height: 0;
        svg path {
          fill: #c3c6de;
        }
      }
      .ssCopy {
        line-height: 0;
        display: inline-block;
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        svg path {
          stroke: #c3c6de;
          fill: none;
        }
      }
    `;
  }};
`;

export default SocialShareStyled;
