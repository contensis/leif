import styled, { css } from 'styled-components';

const FooterStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 160px 0 40px;
      @media ${theme.mq.desktop} {
        text-align: left;
        align-items: stretch;
        flex-direction: row;
      }
      .footer__left-column {
        max-width: 370px;
        width: 100%;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 0 56px 0;
        &:before {
          content: '';
          position: absolute;
          top: -160px;
          left: -142px;
          height: 100%;
          width: 100%;
          background-image: url('/static/img/svgs/shapes/footer-shape.svg');
          background-repeat: no-repeat;
        }
        @media ${theme.mq.desktop} {
          margin: 0 40px 0 0;
          &:before {
            left: 0;
            background-position: top left;
          }
        }
      }
      .footer__icons-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;
        @media ${theme.mq.desktop} {
          margin-top: 24px;
        }
      }
      .footer__icon-link {
        &:not(:last-child) {
          margin-right: 32px;
        }
        &:hover {
          svg path {
            transition: opacity 100ms ease-in-out;
            opacity: 0.8;
          }
        }
      }
      .footer__links {
        width: 100%;
        @media ${theme.mq.desktop} {
          display: flex;
          flex-wrap: wrap;
        }
      }
      .footer__links-column {
        &:not(:last-child) {
          margin-bottom: 40px;
        }
        @media ${theme.mq.desktop} {
          flex-basis: calc((100% / 3) - 40px);
          &:not(:last-child) {
            margin: 0 40px 0 0;
          }
        }
        @media ${theme.mq.mediumDesktop} {
          flex-basis: calc((100% / 4) - 40px);
        }
      }
    `;
  }};
`;

export default FooterStyled;
