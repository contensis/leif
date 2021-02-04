import styled, { css } from 'styled-components';

interface Props {
  className?: string,
  as: any,
  transform?: any,
}

const IconStyled = styled.svg<Props>`
  ${() => {
    return css``;
  }};
`;

export default IconStyled;
