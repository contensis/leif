import React from 'react';

import getVideoID from './utils/getVideoID';
import YoutubeEmbedStyled from './YoutubeEmbed.styled';
interface Props {
  className?: string;
  title: string;
  src: string;
}

const YoutubeEmbed: React.FC<Props> = ({ className, title, src }) => {
  const ID = getVideoID(src);
  const iframeMarkup = `<iframe className="youtube__embed" title="${title}" src="https://www.youtube.com/embed/${ID}" frameborder="0" allowfullscreen></iframe>`;
  return (
    <YoutubeEmbedStyled className={className}>
      <div
        className="youtube__wrapper"
        dangerouslySetInnerHTML={{ __html: iframeMarkup }}
      />
    </YoutubeEmbedStyled>
  );
};

export default YoutubeEmbed;
