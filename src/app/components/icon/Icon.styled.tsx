import styled, { css } from 'styled-components';
import { Props } from './Icon';

const IconStyled = styled.div`
  ${({ type, color, height, width }: Props) => {
    return css`
      height: ${height}px;
      width: ${width}px;
      background-image: url('/static/img/svgs/icons/${type}.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      ${color &&
      css`
        background-image: none;
        background-color: ${color};
        mask: url('/static/img/svgs/icons/${type}.svg') no-repeat center / cover;
        -webkit-mask: url('/static/img/svgs/icons/${type}.svg') no-repeat center /
          cover;
      `}
    `;
  }};
`;

export default IconStyled;
