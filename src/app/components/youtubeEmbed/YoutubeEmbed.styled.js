import styled, { css } from 'styled-components';

const YoutubeEmbedStyled = styled.div`
  ${() => {
    return css`
      max-width: 840px;
      width: 100%;
      .youtube__wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    `;
  }}
`;

export default YoutubeEmbedStyled;
