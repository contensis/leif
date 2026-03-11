import styled, { css } from 'styled-components';

const LandingHeroStyled = styled.div`
  ${({ theme }) => {
    return css`
      background-color: var(--semantic-background-primary);
      padding: 80px 16px;
      @media ${theme.mq.desktop} {
        padding: 120px 0;
      }
      .landing-hero__inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
        align-items: center;
        @media ${theme.mq.desktop} {
          grid-template-columns: 55fr 45fr;
          gap: 80px;
          padding: 0 40px;
        }
      }
      .landing-hero__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .landing-hero__rule {
        display: block;
        width: 60px;
        height: 2px;
        background-color: var(--semantic-brand-primary);
        margin-bottom: 32px;
      }
      .landing-hero__title {
        margin: 0 0 24px;
      }
      .landing-hero__summary {
        margin: 0 0 40px;
        max-width: 520px;
        color: var(--semantic-charcoal-primary);
      }
      .landing-hero__btn {
        margin: 0;
      }
      .landing-hero__photo {
        display: none;
        @media ${theme.mq.desktop} {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    `;
  }}
`;

export default LandingHeroStyled;
