import styled, { css } from 'styled-components';

const ExploreStyled = styled.div`
  ${({ theme }) => {
    return css`
      .explore__title {
        text-align: center;
        margin-bottom: 34px;
      }
      .explore__results {
        display: flex;
        justify-content: flex-start;
        overflow-x: scroll;
        @media ${theme.mq.desktop} {
          justify-content: center;
          overflow-x: auto;
        }
      }
    `;
  }};
`;

export default ExploreStyled;
