import styled, { css } from 'styled-components';
import shape from '../assets/featured-product-shape.svg';

const FeaturedProductStyled = styled.div`
  ${() => {
    return css`
      .fpContent {
        max-width: 840px;
        width: 100%;
        background-color: #f1f1f1;
        padding: 80px 40px;
        margin-top: 80px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -94px;
          right: 80px;
          height: 100%;
          width: 100%;
          background-image: url(${shape});
          background-repeat: no-repeat;
          background-position: top right;
        }
      }
      .fpContentWrapper {
        max-width: 472px;
        width: 100%;
      }
      .fpTitle {
        margin: 0;
      }
      .fpBtn {
        margin-top: 24px;
      }
      .fpCard {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      }
    `;
  }};
`;

export default FeaturedProductStyled;
