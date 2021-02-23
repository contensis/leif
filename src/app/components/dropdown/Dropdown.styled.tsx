import styled, { css } from 'styled-components';

const DropdownStyled = styled.div`
  ${({ theme }) => {
  return css`
    position: relative;
    max-width: 400px;
    width: 100%;
    select {
      ${theme.typeStyles?.smallCopy};
      color: ${theme?.colors?.neutral_charcoal};
      width: 100%;
      cursor: pointer;
      padding: 16px 32px 16px 16px;
      background: rgba(195, 198, 222, 0.1);
      border: 1px solid ${theme?.colors?.secondary_light};
      border-radius: 8px;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    select::-ms-expand {
      display: none;
    }
    .dropdown__icon {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
    }
  `;
  }};
`;

export default DropdownStyled;
