import styled, { css } from 'styled-components';
import Link from '../link/Link';
interface Props {
  theme: any;
  type: string;
  hasText: boolean;
}

const CardStyled = styled(Link)`
  ${({ theme, type, hasText }: Props) => {
    return css`
      display: block;
      text-decoration: none;
      padding: 16px;
      background: ${theme.colors.neutral_white}};
      border-radius: 8px;
      transition: box-shadow 200ms ease-out;
      &:hover {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      }
      .card__title {
        margin: 0;
        color: ${theme.colors.secondary};
      }
      .card__text {
        color: ${theme.colors.neutral_charcoal};
        margin: 24px 0 0 0;
      }
      .card__thumbnail {
        border-radius: 4px;
        display: block;
        object-fit: cover;
      }
      ${
        type === 'blog' &&
        css`
          max-width: 400px;
          width: 100%;
          .card__thumbnail {
            max-width: 368px;
            width: 100%;
            height: 304px;
            margin-top: 24px;
          }
          .card__title {
            ${theme.typeStyles.h4};
          }
          .card__details {
            margin-top: 24px;
            color: ${theme.colors.secondary_light};
            ${theme.typeStyles.smallCopy};
          }
        `
      }
      ${
        type === 'product' &&
        css`
          max-width: 288px;
          width: 100%;
          min-height: 488px;
          color: ${theme.colors.secondary};
          text-align: center;
          &:hover {
            box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
            .card__title {
              text-decoration: underline;
            }
          }
          .card__title {
            margin-top: 24px;
            ${theme.typeStyles.h5};
          }
          .card__thumbnail {
            width: 100%;
            height: 280px;
          }
          .card__tag-wrapper {
            position: relative;
            &:before {
              content: '';
              position: absolute;
              height: 24px;
              width: 24px;
              left: 8px;
              bottom: 24px;
              border-radius: 50%;
              background: ${theme.colors.neutral_white};
            }
          }
          .card__thumbnail-wrapper {
            position: relative;
            height: 280px;
            max-width: 400px;
            width: 100%;
          }
          .card__featured-tag {
            background-color: ${theme.colors.error};
            color: ${theme.colors.neutral_white};
            ${theme.typeStyles.smallCopy};
            display: block;
            padding: 0 8px;
            border-radius: 0px 4px 0px 0px;
            position: absolute;
            top: 0;
            right: 0;
          }
          .card__tag {
            position: absolute;
            height: 16px;
            width: 16px;
            left: 12px;
            bottom: 28px;
          }
          .card__rating {
            display: flex;
            align-items: center;
            margin-top: 16px;
          }
          .card__price {
            display: block;
            margin-top: 16px;
          }
          .card__price {
            color: ${theme.colors.secondary_light};
            font-family: ${theme.typeStyles.fontFamily.headings};
            ${theme.typeStyles.h5};
          }
        `
      }
        ${
          type === 'explore' &&
          css`
            .card__thumbnail-wrapper {
              position: relative;
              max-width: 256px;
              width: 100%;
              height: 256px;
              @media ${theme.mq.desktop} {
                width: 100%;
                max-width: 620px;
                height: 280px;
              }
            }
            .card__title {
              margin: 24px 0 0;
              ${theme.typeStyles.h4};
            }
            margin: 0 8px 32px;
            @media ${theme.mq.desktop} {
              max-width: 322px;
              width: 100%;
            }
          `
        }
        ${
          type === 'content' &&
          css`
            display: flex;
            flex-direction: column;
            max-width: 288px;
            width: 100%;
            padding: 16px 16px 24px;
            .card__title {
              margin: 0 0 24px 0;
              ${theme.typeStyles.h4};
            }
            .card__thumbnail-wrapper {
              position: relative;
              height: 256px;
              max-width: 336px;
              width: 100%;
            }
            ${!hasText &&
            css`
              flex-direction: column-reverse;
              padding: 24px 16px;
              .card__thumbnail {
                margin: 0 0 24px;
              }
              .card__title {
                margin: 0 0 auto 0;
              }
            `}
          `
        }
    `;
  }};
`;

export default CardStyled;
