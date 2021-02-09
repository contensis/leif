import React from 'react';

import VideoPlayerStyled from './VideoPlayer.styled';
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed';
interface Props {
  className?: string;
  title: string;
  type: string;
  hasControls: boolean;
  externalURL?: string;
  internalVideo?: string;
}

const VideoPlayer: React.FC<Props> = ({
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
