import styled, { css } from 'styled-components';
import shape from '../assets/featured-product-shape.svg';

const FeaturedProductStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      overflow-x: hidden;
      @media ${theme.mq.laptop} {
        text-align: left;
        overflow-x: auto;
      }
      .fpContent {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 840px;
        width: 100%;
        margin-top: 80px;
        padding: 40px 16px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 80%;
          left: 0;
          top: 0;
          background-color: ${theme?.colors?.seashell};
        }
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -60px;
          right: -80px;
          height: 100%;
          width: 100%;
          background-image: url(${shape});
          background-repeat: no-repeat;
          background-size: contain;
        }
        @media ${theme.mq.laptop} {
          margin-bottom: 80px;
          padding: 0 0 0 40px;
          justify-content: space-between;
          flex-direction: row;
          &:before {
            top: -54px;
            right: 64px;
            background-position: top right;
          }
          &:after {
            width: 100%;
            height: 392px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .fpContentWrapper {
        max-width: 472px;
        width: 100%;
        @media ${theme.mq.laptop} {
          margin-right: 16px;
        }
      }
      .fpTitle {
        margin: 0;
      }
      .fpText {
        ${theme?.typeStyles?.cardCopy};
        color: ${theme?.colors?.martinique};
        margin: 24px 0 0 0;
      }
      .fpBtn {
        margin-top: 24px;
      }
      .fpCard {
        margin-top: 24px;
        @media ${theme.mq.laptop} {
          margin: 0;
        }
      }
    `;
  }};
`;

export default FeaturedProductStyled;
