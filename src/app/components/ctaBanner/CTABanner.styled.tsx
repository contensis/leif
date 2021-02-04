import styled, { css } from 'styled-components';

const CTABannerStyled = styled.div`
  ${() => {
    return css`
      text-align: center;
      .cta-banner__title {
        margin-top: 24px;
      }
      .cta-banner__text {
        margin: 16px 0 0 0;
      }
      .cta-banner__link {
        margin-top: 40px;
      }
    `;
  }};
`;

export default CTABannerStyled;
