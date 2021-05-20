import styled, { css } from 'styled-components';

interface Props {
  theme: any;
  btnTheme: string;
  isHollow: boolean;
  hasIcon: boolean;
  isDisabled: boolean;
}

const ButtonStyled = styled.button`
  ${({ theme, btnTheme, isHollow, hasIcon, isDisabled }: Props) => {
    return css`
      ${theme.typeStyles.h5};
      font-family: ${theme.typeStyles.fontFamily.headings};
      font-weight: 600;
      display: inline-block;
      white-space: nowrap;
      max-width: 256px;
      border: none;
      width: 100%;
      padding: 16px;
      text-decoration: none;
      background-color: ${theme.button.primary.solid.background};
      color: ${theme.button.primary.solid.color};
      text-align: center;
      border-radius: 4px;
      transition: all 200ms ease-out;
      &:hover {
        background-color: ${theme.button.primary.solid.hover.background};
      }
      ${btnTheme === 'secondary' &&
      css`
        background-color: ${isHollow
          ? theme.button.secondary.hollow.background
          : theme.button.secondary.solid.background};
        color: ${isHollow
          ? theme.button.secondary.hollow.color
          : theme.button.secondary.solid.color};
        border: 1px solid;
        border-color: ${isHollow
          ? theme.button.secondary.hollow.border
          : theme.button.secondary.solid.border};
        &:hover {
          background-color: ${isHollow
            ? theme.button.secondary.hollow.hover.background
            : theme.button.secondary.solid.hover.background};
        }
      `}
      ${btnTheme === 'white' &&
      css`
        background-color: ${theme.button.white.hollow.background};
        color: ${theme.button.white.hollow.color};
        border: 1px solid;
        border-color: ${theme.button.white.hollow.border};
        &:hover {
          background-color: ${theme.button.white.hollow.hover.background};
        }
      `}
        ${isDisabled &&
      css`
        background: ${isHollow || btnTheme === 'white'
          ? theme.button.disabled.hollow.background
          : theme.button.disabled.solid.background};
        color: ${isHollow || btnTheme === 'white'
          ? theme.button.disabled.hollow.color
          : theme.button.disabled.solid.color};
        border: ${isHollow || btnTheme === 'white'
          ? theme.button.disabled.hollow.border
          : theme.button.disabled.solid.border};
        &:hover {
          background: ${isHollow || btnTheme === 'white'
            ? theme.button.disabled.hollow.background
            : theme.button.disabled.solid.background};
          color: ${isHollow || btnTheme === 'white'
            ? theme.button.disabled.hollow.color
            : theme.button.disabled.solid.color};
          border: ${isHollow || btnTheme === 'white'
            ? theme.button.disabled.hollow.border
            : theme.button.disabled.solid.border};
          cursor: not-allowed;
        }
      `}
        ${hasIcon &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        .btn__icon {
          margin-left: 8px;
        }
      `}
    `;
  }}
`;

export default ButtonStyled;
