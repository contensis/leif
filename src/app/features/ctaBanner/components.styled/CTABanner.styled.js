import styled, { css } from 'styled-components';

const CTABannerStyled = styled.div`
  ${() => {
    return css`
      text-align: center;
      .ctaTitle {
        margin-top: 24px;
      }
      .ctaText {
        margin: 16px 0 0 0;
      }
      .ctaLink {
        margin-top: 40px;
      }
    `;
  }};
`;

export default CTABannerStyled;
