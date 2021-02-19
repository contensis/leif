import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  type: string;
}

const GenericHeroStyled = styled.div`
  ${({ theme, type }: Props) => {
  return css`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media ${theme.mq.desktop} {
      flex-direction: ${type === 'center' ? 'column' : 'row'};
      align-items: center;
      text-align: ${type === 'center' ? 'center' : 'left'};
    }
    .generic-hero__back {
      margin-bottom: 104px;
      text-align: left;
    }
    .generic-hero__title {
      position: relative;
      flex-basis: calc(50% - 40px);
      max-width: ${type === 'center' ? '840px' : '730px'};
      width: 100%;
      padding-top: 24px;
      margin: 0;
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
        &:before {
          background-position: ${type === 'center' ? 'top center' : 'left top'};
        }
      }
    }
    .generic-hero__image {
      display: block;
      max-width: 510px;
      width: 100%;
      margin: 24px 0 0 0;
      @media ${theme.mq.desktop} {
        margin: ${type === 'center' ? '40px 0 0 0' : '0 0 0 40px'};
      }
    }
  `;
  }};
`;

export default GenericHeroStyled;
