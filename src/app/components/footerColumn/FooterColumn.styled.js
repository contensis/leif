import styled, { css } from 'styled-components';

const FooterColumnStyled = styled.div`
  ${({ theme, isOpen }) => {
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
        font-family: ${theme?.typeStyles?.fontFamily?.headings};
        ${theme?.typeStyles?.h5};
        @media ${theme.mq.laptop} {
          display: none;
        }
      }
      .footer-column__title {
        display: none;
        @media ${theme.mq.laptop} {
          display: block;
        }
      }
      .footer-column__icon path {
        fill: ${theme?.colors?.kimberly};
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
        @media ${theme.mq.laptop} {
          max-height: none;
          overflow: auto;
          margin-top: 24px;
        }
      }
      .footer-column__sub-link {
        color: ${theme?.colors?.charcoal};
        padding: 8px 16px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        @media ${theme.mq.laptop} {
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
