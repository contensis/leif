import styled, { css } from 'styled-components';
import colors from '~/theme/global/colors';

const NotFoundStyled = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 16px 120px;
      @media ${theme.mq.desktop} {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .not-found__content {
        max-width: 620px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
        @media ${theme.mq.desktop} {
          margin: 0;
          text-align: left;
          align-items: flex-start;
        }
      }
      .not-found__title {
        margin: 0 0 16px;
        position: relative;
        padding-top: 108px;
        width: 100%;
        &:before {
          content: '';
          width: 100%;
          height: 84px;
          position: absolute;
          top: 0;
          left: 0;
          background-image: url('/static/img/svgs/shapes/generic-hero-shape.svg');
          background-repeat: no-repeat;
          background-position: top center;
        }
        @media ${theme.mq.desktop} {
          text-align: left;
          &:before {
            background-position: top left;
          }
        }
      }
      .not-found__text {
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h4};
        margin: 0 0 24px;
        color: ${colors.secondary};
      }
      .not-found__link-btn {
        margin-bottom: 40px;
      }
      .not-found__image {
        display: block;
        max-width: 100%;
        width: 510px;
        object-fit: contain;
        margin: 0 auto;
        @media ${theme.mq.desktop} {
          margin: 0;
        }
      }
    `;
  }};
`;

export default NotFoundStyled;
