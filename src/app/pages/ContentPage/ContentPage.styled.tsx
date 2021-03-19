import styled, { css } from 'styled-components';

const ContentPageStyled = styled.div`
  ${({ theme }) => {
    return css`
      padding-bottom: 120px;
      .generic-hero__region {
        max-width: 1160px;
      }
      .content-page__body-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 64px;
        @media ${theme.mq.desktop} {
          margin-top: 80px;
          flex-direction: row;
        }
      }
      .content-page__related-links {
        width: 100%;
        padding: 0 16px;
        @media ${theme.mq.desktop} {
          max-width: 290px;
          margin-left: 104px;
        }
      }
      .content-page__social-share {
        margin-bottom: 40px;
        display: none;
        @media ${theme.mq.desktop} {
          display: block;
        }
      }
      .image-block__title,
      .image-block__text {
        text-align: left;
      }
    `;
  }};
`;

export default ContentPageStyled;
