import styled, { css } from 'styled-components';

const CardStyled = styled.a`
  ${({ theme, type }) => {
    return css`
      display: block;
      text-decoration: none;
      padding: 16px;
      background: ${theme?.colors?.white};
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
        object-fit: cover;
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
          .cDate {
            position: relative;
            padding-right: 8px;
            margin-right: 8px;
            &:before {
              content: '';
              position: absolute;
              top: 50%;
              right: -2px;
              background-color: ${theme?.colors?.keppel};
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
            ${theme?.typeStyles?.h5};
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
              background: ${theme?.colors?.white};
            }
          }
          .cTag {
            position: absolute;
            height: 16px;
            width: 16px;
            left: 12px;
            bottom: 28px;
            path {
              fill: ${theme?.colors?.hazel};
            }
          }
          .cPrice,
          .cRating {
            display: block;
            margin-top: 16px;
          }
          .cPrice {
            color: ${theme?.colors?.kimberly};
            font-family: ${theme?.typeStyles?.fontFamily?.headings};
            ${theme?.typeStyles?.h5};
          }
        `}
    `;
  }};
`;

export default CardStyled;
