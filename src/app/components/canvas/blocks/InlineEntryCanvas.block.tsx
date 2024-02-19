import React from 'react';
import {
  InlineEntryBlock as InlineEntryBlockProps,
  RenderBlockPropsWithChildren,
} from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { VideoPropsMapping } from '~/components/videoPlayer/VideoPlayer.mapper';
import { BannerCanvasPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';

import CTABanner from '~/components/ctaBanner/CTABanner';
import VideoPlayer from '~/components/videoPlayer/VideoPlayer';
import Link, { Props as LinkProps } from '~/components/link/Link';
import { InlineEntryMappings } from '~/components/link/Link.mapper';

type InlineEntries = 'accessibleVideo' | 'callToAction' | 'plant';
type CustomLinkProps = LinkProps & { text: string };

const InlineEntryBlock = (
  props: RenderBlockPropsWithChildren<InlineEntryBlockProps>
) => {
  const contentType = props.block.value?.sys?.contentTypeId as InlineEntries;

  switch (contentType) {
    case 'accessibleVideo':
      return <VideoPlayer {...mapJson(props.block.value, VideoPropsMapping)} />;

    case 'callToAction':
      return (
        <CTABanner {...mapJson(props.block.value, BannerCanvasPropsMapping)} />
      );
    default: {
      const p = mapJson(props, InlineEntryMappings) as CustomLinkProps;
      return <Link {...p}>{p.text}</Link>;
    }
  }
};

export default InlineEntryBlock;
