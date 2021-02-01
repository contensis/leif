import styled, { css } from 'styled-components';

const RelatedContentStyled = styled.div`
  ${() => {
    return css`
      .rcTitle {
        text-align: center;
        margin: 0;
      }
      .rcResults {
        display: flex;
        align-items: stretch;
        justify-content: center;
        margin-top: 48px;
      }
      .rcCard {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
      .rcLink {
        display: block;
        margin: 48px auto 0;
      }
    `;
  }}
`;

export default RelatedContentStyled;
