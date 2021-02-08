import styled, { css } from 'styled-components';
interface Props {
  type: string,
}

const CardStyled = styled.a<Props>`
  ${({ theme, type }) => {
    return css`
      display: block;
      text-decoration: none;
      padding: 16px;
      background: ${theme?.colors?.neutral_white}};
      border-radius: 8px;
      transition: box-shadow 200ms ease-out;
      &:hover {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      }
      .card__title {
        margin: 0;
        color: ${theme?.colors?.secondary};
      }
      .card__text {
        color: ${theme?.colors?.neutral_charcoal};
        margin: 24px 0 0 0;
      }
      .card__thumbnail {
        border-radius: 4px;
        display: block;
        object-fit: cover;
      }
      ${type === 'blog' &&
        css`
          max-width: 400px;
          width: 100%;
          .card__thumbnail {
            width: 368px;
            height: 304px;
            margin-top: 24px;
          }
          .card__title {
            ${theme?.typeStyles?.h4};
          }
          .card__details {
            margin-top: 24px;
            color: ${theme?.colors?.secondary_light};
            ${theme?.typeStyles?.smallCopy};
          }
          .card__date {
            position: relative;
            padding-right: 8px;
            margin-right: 8px;
            &:before {
              content: '';
              position: absolute;
              top: 50%;
              right: -2px;
              background-color: ${theme?.colors?.primary_light};
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
          .card__title {
            margin-top: 24px;
            ${theme?.typeStyles?.h5};
          }
          .card__thumbnail {
            width: 256px;
            height: 280px;
          }
          .card__thumbnail-wrapper {
            position: relative;
            &:before {
              content: '';
              position: absolute;
              height: 24px;
              width: 24px;
              left: 8px;
              bottom: 24px;
              border-radius: 50%;
              background: ${theme?.colors?.neutral_white}};
            }
          }
          .card__tag {
            position: absolute;
            height: 16px;
            width: 16px;
            left: 12px;
            bottom: 28px;
            path {
              fill: ${theme?.colors?.secondary_lighter};
            }
          }
          .card__price,
          .card__rating {
            display: block;
            margin-top: 16px;
          }
          .card__price {
            color: ${theme?.colors?.secondary_light};
            font-family: ${theme?.typeStyles?.fontFamily?.headings};
            ${theme?.typeStyles?.h5};
          }
        `}
    `;
  }};
`;

export default CardStyled;
