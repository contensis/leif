import styled, { css } from 'styled-components';

const GenericHeroStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media ${theme.mq.desktop} {
        flex-direction: row;
        align-items: flex-end;
        text-align: left;
      }
      .generic-hero__back {
        margin-bottom: 104px;
      }
      .generic-hero__title {
        position: relative;
        flex-basis: calc(50% - 40px);
        padding-top: 24px;
        margin: 0;
        text-align: center;
        &:before {
          content: '';
          width: 100%;
          height: 220px;
          position: absolute;
          top: -80px;
          left: 0;
          background-image: url('/static/img/svgs/generic-hero-shape.svg');
          background-repeat: no-repeat;
          background-position: top center;
        }
        @media ${theme.mq.desktop} {
          text-align: left;
          &:before {
            background-position: left top;
          }
        }
      }
      .generic-hero__image {
        display: block;
        max-width: 510px;
        width: 100%;
        margin: 24px 0 0 0;
        @media ${theme.mq.desktop} {
          margin: 0 0 0 40px;
        }
      }
    `;
  }};
`;

export default GenericHeroStyled;
