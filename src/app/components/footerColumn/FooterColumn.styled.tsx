import styled, { css } from 'styled-components';
interface Props {
  theme: any;
  isOpen: boolean;
}

const FooterColumnStyled = styled.div`
  ${({ theme, isOpen }: Props) => {
    return css`
      .footer-column__btn {
        padding: 8px 16px;
        margin: 0;
        width: 100%;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h5};
        @media ${theme.mq.desktop} {
          display: none;
        }
      }
      .footer-column__title {
        ${theme.typeStyles.h5};
        display: none;
        @media ${theme.mq.desktop} {
          display: block;
        }
      }
      .footer-column__icon path {
        fill: ${theme.colors.secondary_light};
        margin-left: 8px;
      }
      .footer-column__sub-links {
        display: flex;
        flex-direction: column;
        max-height: 0;
        transition: max-height 0.15s ease-out;
        overflow: hidden;
        ${isOpen &&
        css`
          max-height: 224px;
          transition: max-height 250ms ease-in;
        `}
        @media ${theme.mq.desktop} {
          max-height: none;
          overflow: unset;
          margin-top: 24px;
        }
      }
      .footer-column__sub-link {
        color: ${theme.colors.neutral_charcoal};
        padding: 8px 16px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        @media ${theme.mq.desktop} {
          padding: 0;
          &:not(:last-child) {
            margin-bottom: 16px;
          }
        }
      }
    `;
  }};
`;

export default FooterColumnStyled;
