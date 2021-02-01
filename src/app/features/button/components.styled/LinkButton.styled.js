import styled, { css } from 'styled-components';

const LinkButtonStyled = styled.a`
  ${({ type, isHollow }) => {
    return css`
      /* TODO: Store button theme types in theme file, background, foreground colours */
      display: inline-block;
      max-width: 256px;
      width: 100%;
      padding: 16px;
      text-decoration: none;
      background-color: #77e8c6;
      color: #2b2f51;
      text-align: center;
      border-radius: 4px;
      transition: all 200ms ease-out;
      &:hover {
        background-color: #39b38e;
      }
      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 3px #303b9f;
        border-radius: 4px;
      }
      ${type === 'secondary' &&
        css`
          background-color: ${isHollow ? 'transparent' : '#2B2F51'};
          color: ${isHollow ? '#2B2F51' : '#77E8C6'};
          border: 1px solid;
          border-color: ${isHollow ? '#2B2F51' : 'transparent'};
          &:hover {
            background-color: ${isHollow ? 'rgba(195,198,222, .2)' : '#1E213E'};
          }
        `}
    `;
  }}
`;

export default LinkButtonStyled;
