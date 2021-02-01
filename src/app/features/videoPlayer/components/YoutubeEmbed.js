import React from 'react';

import getVideoID from '../utils/getVideoID';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {string} props.src
 */

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

export default YoutubeEmbed;
