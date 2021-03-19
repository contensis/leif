import styled, { css } from 'styled-components';

interface Props {
  theme: any;
  type: string;
}

const CalloutStyled = styled.div`
  ${({ theme, type }: Props) => {
    const success = theme.colors.primary;
    const warning = theme.colors.error;
    const note = theme.colors.link;

    return css`
      background-color: rgba(195, 198, 222, 0.1);
      box-shadow: inset 6px 0px 0px
        ${type === 'success'
          ? success
          : type === 'warning'
          ? warning
          : type === 'note'
          ? note
          : ''};
      padding: 16px;
      .callout__title {
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
        display: block;
        margin-bottom: 8px;
      }
      .callout__text {
        display: block;
        margin: 0;
        > * {
          margin: 0 0 8px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
    `;
  }};
`;

export default CalloutStyled;
