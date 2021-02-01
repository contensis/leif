import styled, { css } from 'styled-components';

const CTABannerStyled = styled.div`
  ${() => {
    return css`
      text-align: center;
      .ctaText {
        margin-top: 16px;
      }
      .ctaLink {
        margin-top: 40px;
      }
    `;
  }};
`;

export default CTABannerStyled;
