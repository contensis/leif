import React from 'react';

import VideoPlayerStyled from './VideoPlayer.styled';
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed';
export interface Props {
  className?: string;
  title: string;
  type: string;
  hasControls?: boolean;
  externalURL?: string | undefined;
  internalVideo?: string | undefined;
}

const VideoPlayer = ({
  className,
  title,
  type,
  hasControls,
  externalURL,
  internalVideo,
}: Props) => {
  const VideoContent = (type: string) => {
    switch (type) {
      case 'YouTube': {
        if (!externalURL) return null;
        return <YoutubeEmbed title={title} src={externalURL} />;
      }
      case 'Internal': {
        if (!internalVideo) return null;
        return (
          <VideoPlayerStyled controls={hasControls} name="media">
            <source src={internalVideo} type="video/mp4" />
          </VideoPlayerStyled>
        );
      }
      default:
        break;
    }
  };
  return <div className={className}>{VideoContent(type)}</div>;
};

export default VideoPlayer;
