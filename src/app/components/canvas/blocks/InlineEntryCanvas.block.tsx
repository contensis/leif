import React from 'react';
import {
  InlineEntry as InlineEntryCanvas,
  InlineEntryBlock as InlineEntryBlockProps,
  RenderBlockPropsWithChildren,
} from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { VideoPropsMapping } from '~/components/videoPlayer/VideoPlayer.mapper';
import { BannerCanvasPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';

import CTABanner from '~/components/ctaBanner/CTABanner';
import VideoPlayer from '~/components/videoPlayer/VideoPlayer';

type InlineEntries = 'accessibleVideo' | 'callToAction' | 'plant';

const InlineEntryBlock = (
  props: RenderBlockPropsWithChildren<InlineEntryBlockProps>
) => {
  const contenttype = props.block.value?.sys?.contentTypeId as InlineEntries;

  switch (contenttype) {
    case 'accessibleVideo':
      return <VideoPlayer {...mapJson(props.block.value, VideoPropsMapping)} />;
    case 'callToAction':
      return (
        <CTABanner {...mapJson(props.block.value, BannerCanvasPropsMapping)} />
      );
    default:
      return <InlineEntryCanvas block={props.block} />;
  }
};

export default InlineEntryBlock;
