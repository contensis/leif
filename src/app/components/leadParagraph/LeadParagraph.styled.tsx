import styled, { css } from 'styled-components';

interface Props {
  theme: any;
  type: string;
}

const LeadParagraphStyled = styled.div`
  ${({ theme, type }: Props) => {
    return css`
      ${theme?.typeStyles?.h4};
      font-family: ${theme?.typeStyles?.fontFamily?.headings};
      ${type === 'center' && css`
        text-align: center;
        color: ${theme?.colors?.secondary_light};
        padding-top: 80px;
        margin-top: 24px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          background-image: url('/static/img/svgs/generic-hero-shape.svg');
          width: 220px;
          height: 80px;
        }
      `}
    `;
  }}
`;

export default LeadParagraphStyled;
