import styled, { css } from 'styled-components';
import shape from '../assets/footer-shape.svg';

const FooterStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: stretch;
      padding: 160px 0 40px;
      .fLeftCol {
        max-width: 370px;
        width: 100%;
        text-align: center;
        margin-right: 40px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        &:before {
          content: '';
          position: absolute;
          top: -160px;
          left: 0;
          height: 100%;
          width: 100%;
          background-position: top left;
          background-image: url(${shape});
          background-repeat: no-repeat;
        }
      }
      .fLinkTitle {
        margin: 0;
      }
      .fIconsWrapper {
        margin-top: 24px;
        svg:not(:last-child) {
          margin-right: 32px;
        }
      }
      .fLinksWrapper {
        min-width: 180px;
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
      .fSubLinksWrapper {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
      }
      .fSubLink {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &:not(:first-child) {
          margin-top: 16px;
        }
      }
    `;
  }};
`;

export default FooterStyled;
