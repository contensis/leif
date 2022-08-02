import styled, { css } from 'styled-components';
interface Props {
  theme?: any;
  type: string;
  isListingPage: boolean;
  hasPaddingTop: boolean;
}

const GenericHeroStyled = styled.div`
  ${({ theme, type, isListingPage, hasPaddingTop }: Props) => {
    return css`
      margin: 0 auto;
      padding-top: 74px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      @media ${theme.mq.desktop} {
        padding-top: ${hasPaddingTop ? '74px' : '0'};
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: left;
      }
      .generic-hero__back {
        margin-bottom: 104px;
        text-align: left;
      }
      .generic-hero__title {
        ${theme.typeStyles.h2};
        position: relative;
        flex-basis: calc(50% - 40px);
        max-width: 730px;
        width: 100%;
        padding-top: 24px;
        margin: 0;
        &:before {
          content: '';
          width: 100%;
          height: 220px;
          position: absolute;
          top: -80px;
          left: 0;
          background-image: url('/static/img/svgs/shapes/generic-hero-shape.svg');
          background-repeat: no-repeat;
          background-position: top center;
          z-index: -1;
        }
        @media ${theme.mq.desktop} {
          &:before {
            background-position: left top;
          }
        }
      }
      .generic-hero__text {
        margin: 16px 0 0 0;
        color: ${theme.colors.neutral_charcoal};
      }
      .generic-hero__image {
        display: block;
        max-width: 510px;
        width: 100%;
        margin: 24px 0 0 0;
        @media ${theme.mq.desktop} {
          margin: 0 0 0 40px;
        }
      }
      .generic-hero__detail {
        margin-top: 16px;
        color: ${theme.colors.secondary_light};
      }
      .generic-hero__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        text-align: center;
        color: ${theme.colors.secondary};
        margin: 24px auto 0;
        padding: 16px 24px;
        max-width: 288px;
        width: 100%;
        border: 1px solid ${theme.colors.secondary};
        border-radius: 4px;
        > div:first-child {
          margin-left: 10px;
        }
        @media ${theme.mq.desktop} {
          margin: 24px 0 0 0;
        }
      }
      .generic-hero__detail-price {
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h5};
      }
      ${type === 'Full width' &&
      css`
        @media ${theme.mq.desktop} {
          flex-direction: column;
          text-align: center;
        }
        .generic-hero__title {
          max-width: 840px;
          @media ${theme.mq.desktop} {
            &:before {
              background-position: top center;
            }
          }
        }
        .generic-hero__image {
          @media ${theme.mq.desktop} {
            margin: 40px 0 0 0;
          }
        }
      `}
      .generic-hero__link-wrapper {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
        text-decoration: none;
        @media ${theme.mq.desktop} {
          padding-top: 0;
          flex-direction: row;
          align-items: center;
          text-align: left;
        }
        .generic-hero__title {
          margin-top: 98px;
          @media ${theme.mq.desktop} {
            margin: 0;
          }
        }
        &:hover {
          .generic-hero__title {
            text-decoration: underline;
          }
          .generic-hero__btn {
            background-color: rgba(195, 198, 222, 0.2);
          }
        }
        .generic-hero__image {
          margin-bottom: 16px;
          @media ${theme.mq.desktop} {
            margin-bottom: 0;
          }
        }
      }
      .generic-hero__content {
        display: flex;
        flex-direction: column;
        max-width: 520px;
        width: 100%;
        @media ${theme.mq.desktop} {
          padding: 0 32px 0 0;
        }
      }
      .generic-hero__link {
        margin: 24px auto 16px;
        @media ${theme.mq.desktop} {
          margin: 24px 0 0;
        }
      }
      ${isListingPage &&
      css`
        padding-top: 0;
        @media ${theme.mq.desktop} {
          padding-top: 74px;
        }
      `};
    `;
  }};
`;

export default GenericHeroStyled;
