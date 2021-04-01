import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  hasContentCentered: boolean;
}

const ContentPageStyled = styled.div`
  ${({ theme, hasContentCentered }: Props) => {
    return css`
      padding-bottom: 120px;
      .content-page__body-content {
        margin-top: ${hasContentCentered ? '40px' : '64px'};
        @media ${theme.mq.largeDesktop} {
          display: flex;
          justify-content: ${hasContentCentered ? 'center' : 'flex-start'};
          margin: ${hasContentCentered ? '40px 0 0 0' : '40px 0 0 110px'};
        }
      }
      .content-page__related-links {
        padding: 0 16px;
        margin: 0 auto;
        max-width: 730px;
        @media ${theme.mq.largeDesktop} {
          padding: 0;
          margin: 0 0 0 110px;
          max-width: 340px;
          width: 100%;
        }
      }
      .content-page__social-share {
        margin-bottom: 40px;
        display: none;
        @media ${theme.mq.largeDesktop} {
          display: block;
        }
      }
      .image-block__title,
      .image-block__text {
        @media ${theme.mq.largeDesktop} {
          text-align: left;
        }
      }
    `;
  }};
`;

export default ContentPageStyled;
