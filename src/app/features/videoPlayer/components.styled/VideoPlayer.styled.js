import styled, { css } from 'styled-components';
const VideoPlayerStyled = styled.video`
  ${() => {
    return css`
      position: relative;
      width: 100%;
      height: auto;
    `;
  }}
`;

export default VideoPlayerStyled;
