import styled, { css } from 'styled-components';

const AuthorStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      .aPhoto {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
      .aPerson {
        margin-left: 8px;
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme?.typeStyles?.h6};
      }
    `;
  }};
`;

export default AuthorStyled;
