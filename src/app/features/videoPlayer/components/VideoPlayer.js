import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayerStyled from '../components.styled/VideoPlayer.styled';
import VideoContainerStyled from '../components.styled/VideoContainer.styled';
import YoutubeEmbed from '../components/YoutubeEmbed';

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

VideoPlayer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hasControls: PropTypes.bool,
  src: PropTypes.string,
  externalURL: PropTypes.string,
  internalVideo: PropTypes.string,
};

export default VideoPlayer;
