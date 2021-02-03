import React from 'react';

import VideoPlayerStyled from './VideoPlayer.styled';
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed';

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
      return <YoutubeEmbed title={title} src={externalURL} />;
    case 'Internal':
      return (
        <VideoPlayerStyled
          className={className}
          controls={hasControls}
          name="media"
        >
          <source src={internalVideo} type="video/mp4" />
        </VideoPlayerStyled>
      );
    default:
      break;
  }
};

export default VideoPlayer;
