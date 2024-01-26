import styled, { css } from 'styled-components';

const AuthorStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      .author__photo {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 8px;
      }
      .author__name {
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h6};
      }
    `;
  }};
`;

export default AuthorStyled;
