import styled, { css } from 'styled-components';

const TrendingStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      overflow-x: scroll;
      width: 100%;
      @media ${theme.mq.laptop} {
        overflow-x: auto;
        width: auto;
      }
      a {
        height: 40px;
        font-family: ${theme.typeStyles.fontFamily.default};
        ${theme.typeStyles.smallCopy};
        &:not(:last-child) {
          margin-right: 24px;
        }
      }
    `;
  }}
`;

export default TrendingStyled;
