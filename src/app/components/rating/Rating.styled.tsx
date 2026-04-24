import styled, { css } from 'styled-components';

interface Props {
  rating: string;
}

const RatingStyled = styled.div<Props>`
  ${({ theme, rating }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      .rating__star {
        path {
          fill: var(--semantic-charcoal-tertiary);
        }
      }
      ${rating !== '0' &&
      css`
        .rating__star:nth-child(-n + ${rating}) {
          background-color: var(--semantic-warning-primary);
        }
      `}
    `;
  }};
`;

export default RatingStyled;
