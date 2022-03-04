import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  type: string;
}

const DropdownStyled = styled.div`
  ${({ theme, type }: Props) => {
    return css`
      position: relative;
      max-width: 400px;
      width: 100%;
      select {
        ${theme.typeStyles.smallCopy};
        color: ${theme.colors.neutral_charcoal};
        width: 100%;
        cursor: pointer;
        padding: 16px 32px 16px 16px;
        background-color: rgba(195, 198, 222, 0.1);
        border: 1px solid ${theme.colors.secondary_light};
        border-radius: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        option {
          color: ${theme.colors.neutral_white};
          background-color: ${theme.colors.neutral_charcoal};
        }
      }
      select::-ms-expand {
        display: none;
      }
      .dropdown__icon {
        pointer-events: none;
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
      }
      ${type === 'sort' &&
      css`
        .dropdown__icon {
          height: 18px;
          width: 18px;
        }
      `}
    `;
  }};
`;

export default DropdownStyled;
