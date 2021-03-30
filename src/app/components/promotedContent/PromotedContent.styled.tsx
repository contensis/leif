import styled, { css } from 'styled-components';

const PromotedContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      .promoted-content__title {
        text-align: center;
        margin-bottom: 34px;
      }
      .promoted-content__results {
        display: flex;
        justify-content: flex-start;
        overflow-x: scroll;
        @media ${theme.mq.desktop} {
          justify-content: center;
          overflow-x: auto;
        }
      }
      .promoted-content__link {
        margin: 80px auto 0;
        display: block;
        @media ${theme.mq.desktop} {
          margin-top: 40px;
        }
      }
    `;
  }};
`;

export default PromotedContentStyled;
