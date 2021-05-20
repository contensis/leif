import styled, { css } from 'styled-components';

interface Props {
  theme: any;
  rating: string;
}

const RatingStyled = styled.div`
  ${({ theme, rating }: Props) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      .rating__star {
        path {
          fill: ${theme.colors.neutral_lightgrey};
        }
      }
      ${rating !== '0' &&
      css`
        .rating__star:nth-child(-n + ${rating}) {
          background-color: ${theme.colors.warning};
        }
      `}
    `;
  }};
`;

export default RatingStyled;
