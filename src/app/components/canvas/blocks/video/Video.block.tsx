import React from 'react';
import VideoPlayer from '~/components/videoPlayer/VideoPlayer';
import {
  InlineEntryBlock as InlineEntryBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';

interface VideoTypes {
  source?: string;
  text?: string;
  externalURL?: string;
  entryTitle?: string;
}

const VideoBlock = (props: RenderBlockProps<InlineEntryBlockProps>) => {
  const {
    source = '',
    text = '',
    externalURL = '',
    entryTitle = '',
  } = props.block.value as VideoTypes;

  const title = text || entryTitle;

  return <VideoPlayer type={source} title={title} externalURL={externalURL} />;
};

export default VideoBlock;
