import React from 'react';
import PropTypes from 'prop-types';
import getVideoID from '../utils/getVideoID';

const YoutubeEmbed = ({ className, title, src }) => {
  const ID = getVideoID(src);
  const iframeMarkup = `<iframe className="ytEmbed" title="${title}" src="https://www.youtube.com/embed/${ID}" frameborder="0" allowfullscreen></iframe>`;
  return (
    <div className={className}>
      <div
        className="ytWrapper"
        dangerouslySetInnerHTML={{ __html: iframeMarkup }}
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default YoutubeEmbed;
