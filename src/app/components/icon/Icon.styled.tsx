import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  as: any;
  transform?: any;
  hasDefaultStyles?: boolean;
}

const IconStyled = styled.svg<Props>`
  ${({ theme, hasDefaultStyles }) => {
  return css`
  ${hasDefaultStyles && css`
      height: 40px;
      max-width: 40px;
      width: 100%;
      margin: 8px;
      background: ${theme?.colors?.neutral_lightgrey};
      padding: 8px;
      border-radius: 3px;
  `}
    `;
  }};
`;

export default IconStyled;
