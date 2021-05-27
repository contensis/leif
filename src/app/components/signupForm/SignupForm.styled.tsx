import styled, { css } from 'styled-components';

const SignupForm = styled.form`
  ${() => {
    return css`
      max-width: 620px;
      width: 100%;
      padding: 0 24px;
      margin: 0 auto;
    `;
  }};
`;

export default SignupForm;
