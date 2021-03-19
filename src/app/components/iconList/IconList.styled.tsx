import styled, { css } from 'styled-components';

const IconListStyled = styled.div`
  ${() => {
    return css`
      .icon-list__item {
        &:not(:first-child) {
          margin-top: 64px;
        }
      }
    `;
  }};
`;

export default IconListStyled;
