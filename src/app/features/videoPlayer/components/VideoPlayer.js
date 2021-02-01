import React from 'react';

import VideoPlayerStyled from '../components.styled/VideoPlayer.styled';
import VideoContainerStyled from '../components.styled/VideoContainer.styled';
import YoutubeEmbed from '../components/YoutubeEmbed';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {string} props.type
 * @param {boolean} props.hasControls
 * @param {string} props.externalURL
 * @param {string} props.internalVideo
 */

const VideoPlayer = ({
  className,
  title,
  type,
  hasControls,
  externalURL,
  internalVideo,
}) => {
  if (!type) return null;
  switch (type) {
    case 'YouTube':
      return (
        <VideoContainerStyled className={className}>
          <YoutubeEmbed title={title} src={externalURL} className="vpWrapper" />
        </VideoContainerStyled>
      );
    case 'Internal':
      return (
        <VideoContainerStyled className={className}>
          <VideoPlayerStyled
            className={className}
            controls={hasControls}
            name="media"
          >
            <source src={internalVideo} type="video/mp4" />
          </VideoPlayerStyled>
        </VideoContainerStyled>
      );
    default:
      break;
  }
};

export default VideoPlayer;
