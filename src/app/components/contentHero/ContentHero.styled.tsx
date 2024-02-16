import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      &[data-hero='hero-image'] {
        margin-top: -112px;
        width: 100%;
        height: 640px;
        position: relative;

        .content-hero__nav--back {
          color: #fff;
          position: absolute;
          z-index: 9;
          top: 138px;
          left: 16px;
          @media ${theme.mq.largeDesktop} {
            left: 80px;
          }
        }

        .content-hero__overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
          background: linear-gradient(
            180deg,
            rgba(43, 47, 81, 0.4) 15.88%,
            rgba(43, 47, 81, 0) 100%
          );
        }

        .content-hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .content-hero__content--outer {
          z-index: 9;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          bottom: 0;
          @media ${theme.mq.largeDesktop} {
            display: grid;
            grid-template-columns: 840px 1fr;
            gap: 150px;
          }
        }

        .content-hero__content--inner svg {
          display: none;
        }

        .content-hero__content--inner {
          max-width: 940px;
          width: calc(100% - 32px);
          background: #fff;
          box-shadow: 0 -16px 24px 0 rgba(56, 33, 146, 0.07);
          border-radius: 8px 8px 0 0;
          padding: 40px 16px;
          margin: 0 auto;
          @media ${theme.mq.largeDesktop} {
            width: 100%;
            padding: 64px 16px;
            margin: 0;
          }
        }

        .content-hero__content--inner > * {
          max-width: 730px;
          width: 100%;
          padding: 0 16px;
          margin: 0 auto;
          text-align: center;
          @media ${theme.mq.largeDesktop} {
            text-align: left;
            padding: 0;
            margin: 0 0 0 auto;
          }
        }
      }

      &[data-hero='no-image'] {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        @media ${theme.mq.largeDesktop} {
          display: grid;
          grid-template-columns: 840px 1fr;
          gap: 150px;
        }

        .content-hero__nav--back {
          display: flex;
          margin-bottom: 40px;
          align-self: flex-start;
        }

        .content-hero__content--inner {
          margin: 0 auto;
          max-width: 730px;
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          @media ${theme.mq.largeDesktop} {
            margin: 0 0 0 auto;
            display: block;
          }
        }
      }
    `;
  }};
`;
