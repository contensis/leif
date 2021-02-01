import styled, { css } from 'styled-components';

const AuthorStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: center;
      .aPhoto {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover; //TODO: npm package to fix object-fit on older browsers?
      }
      .aPerson {
        margin-left: 8px;
      }
    `;
  }};
`;

export default AuthorStyled;
