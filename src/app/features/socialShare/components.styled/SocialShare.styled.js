import styled, { css } from 'styled-components';

const SocialShareStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      .ssIcon {
        margin-right: 32px;
        display: inline-block;
        line-height: 0;
        svg path {
          fill: ${theme?.colors?.hazel};
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
          stroke: ${theme?.colors?.hazel};
          fill: none;
        }
      }
      .ssIcon,
      .ssCopy {
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 50%;
        }
      }
    `;
  }};
`;

export default SocialShareStyled;
