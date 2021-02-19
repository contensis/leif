import styled, { css } from 'styled-components';

const LandingHeroStyled = styled.div`
  ${({ theme }) => {
  return css`
      position: relative;
      .image-hero__image-wrapper {
        position: relative;
      }
      .image-hero__image {
        height: 512px;
        width: 100%;
        object-fit:  cover;
        display: block;
        @media ${theme.mq.laptop} {
          height: 800px;
        }
      }
      .image-hero__image-overlay {
        background: linear-gradient(180deg, rgba(43, 47, 81, 0.4) 15.88%, rgba(43, 47, 81, 0) 100%);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    `;
  }}
`;

export default LandingHeroStyled;
