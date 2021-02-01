import styled, { css } from 'styled-components';

const CardStyled = styled.a`
  ${({ type }) => {
    return css`
      display: block;
      text-decoration: none;
      padding: 16px;
      background: #ffffff;
      border-radius: 8px;
      transition: box-shadow 200ms ease-out;
      &:hover {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      }
      .cTitle {
        margin: 0;
      }
      .cThumbnail {
        border-radius: 4px;
        display: block;
        object-fit: cover; //TODO: npm package to fix object-fit on older browsers?
      }
      ${type === 'blog' &&
        css`
          max-width: 400px;
          width: 100%;
          .cThumbnail {
            width: 368px;
            height: 304px;
            margin-top: 24px;
          }
          .cDetails {
            margin-top: 24px;
          }
          /* TODO: Make this a pattern? (its used else where) */
          .cDate {
            position: relative;
            padding-right: 8px;
            margin-right: 8px;
            &:before {
              content: '';
              position: absolute;
              top: 50%;
              right: -2px;
              background-color: #39b28e; //TODO: needs to be a theme variable.
              border-radius: 50%;
              transform: translateY(-50%);
              height: 4px;
              width: 4px;
            }
          }
        `}
      ${type === 'product' &&
        css`
          max-width: 288px;
          width: 100%;
          min-height: 488px;
          box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
          text-align: center;
          .cTitle {
            margin-top: 24px;
          }
          .cThumbnail {
            width: 256px;
            height: 280px;
          }
          .cThumbnailWrapper {
            position: relative;
            &:before {
              content: '';
              position: absolute;
              height: 24px;
              width: 24px;
              left: 8px;
              bottom: 24px;
              border-radius: 50%;
              background: #fff;
            }
          }
          .cTag {
            position: absolute;
            height: 16px;
            width: 16px;
            left: 12px;
            bottom: 28px;
            path {
              fill: #c3c6de;
            }
          }
          .cPrice,
          .cRating {
            display: block;
            margin-top: 16px;
          }
        `}
    `;
  }};
`;

export default CardStyled;
