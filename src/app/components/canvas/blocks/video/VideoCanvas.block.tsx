import React from 'react';
import VideoPlayer from '~/components/videoPlayer/VideoPlayer';
import {
  InlineEntryBlock as InlineEntryBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { VideoCanvasPropsMapping } from '~/components/videoPlayer/VideoPlayer.mapper';

const VideoBlock = (props: RenderBlockProps<InlineEntryBlockProps>) => {
  return <VideoPlayer {...mapJson(props, VideoCanvasPropsMapping)} />;
};

export default VideoBlock;
