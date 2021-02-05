import styled, { css } from 'styled-components';

interface Props {
  name: string;
}

const VideoPlayerStyled = styled.video<Props>`
  ${() => {
    return css`
      position: relative;
      width: 100%;
      height: auto;
    `;
  }}
`;

export default VideoPlayerStyled;
