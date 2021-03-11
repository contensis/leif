import styled, { css } from 'styled-components';

const InputControlStyled = styled.button`
  ${({ theme }) => {
    return css`
      padding: 0;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background-color: ${theme.colors.neutral_lightgrey};
      position: relative;
      transition: opacity 100ms ease-in-out;
      &:hover {
        opacity: 0.8;
      }
      .input-control__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }};
`;

export default InputControlStyled;
