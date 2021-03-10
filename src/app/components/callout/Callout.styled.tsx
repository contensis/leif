import styled, { css } from 'styled-components';

interface Props {
  theme: any;
  type: string;
}

const CalloutStyled = styled.div`
  ${({ theme, type }: Props) => {
    const success = theme.colors.primary;
    const error = theme.colors.error;
    const information = theme.colors.link;

    return css`
      background-color: rgba(195, 198, 222, 0.1);
      box-shadow: inset 6px 0px 0px
        ${type === 'success'
          ? success
          : type === 'error'
          ? error
          : type === 'information'
          ? information
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
        margin: 0;
      }
    `;
  }};
`;

export default CalloutStyled;
