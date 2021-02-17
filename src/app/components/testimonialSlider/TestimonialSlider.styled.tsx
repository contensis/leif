import styled, { css } from 'styled-components';

interface Props {
  bgImage?: string;
}

const TestimonialSliderStyled = styled.div`
  ${({ bgImage }: Props) => {
    return css`
      background-image: url(${bgImage});
    `;
  }};
`;

export default TestimonialSliderStyled;
