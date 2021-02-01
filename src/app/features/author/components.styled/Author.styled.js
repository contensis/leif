import styled, { css } from 'styled-components';

const AuthorStyled = styled.div`
  ${({ theme }) => {
    console.info(theme);
    const props = {
      h6Styles: theme?.typeStyles?.h6,
    };
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
        ${props.h6Styles};
      }
    `;
  }};
`;

export default AuthorStyled;
