import loadable from '@loadable/component';

import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

import {
  RenderBlockProps,
  ComponentBlock,
  ImageBlock,
  QuoteBlock,
  InlineEntryBlock,
  PanelBlock,
} from '@contensis/canvas-react';

export const Composer = loadable<ComposerProps>(
  () =>
    import(
      /* webpackChunkName: "composer-wrapper" */ '~/components/composer/ComposerWrapper'
    )
);

export const CoreComponents = {
  ZenInfo: loadable(
    () =>
      import(
        /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
      ),
    {
      resolveComponent: module => module.VersionInfo,
    }
  ),
};

export const Canvas = loadable(
  () =>
    import(
      /* webpackChunkName: "canvas.component" */ '~/components/canvas/canvas'
    )
);

// Blocks

export const Image = loadable<RenderBlockProps<ImageBlock>>(
  () =>
    import(
      /* webpackChunkName: "image.component" */ '~/components/canvas/blocks/image/Image.block'
    )
);
export const Quote = loadable<RenderBlockProps<QuoteBlock>>(
  () =>
    import(
      /* webpackChunkName: "quote.component" */ '~/components/canvas/blocks/quote/Quote.block'
    )
);

export const Video = loadable<RenderBlockProps<InlineEntryBlock>>(
  () =>
    import(
      /* webpackChunkName: "video.component" */ '~/components/canvas/blocks/video/Video.block'
    )
);
export const Panel = loadable<RenderBlockProps<PanelBlock>>(
  () =>
    import(
      /* webpackChunkName: "panel.component" */ '~/components/canvas/blocks/panel/Panel.block'
    )
);

// Components
export const FeaturedProductComponent = loadable<
  RenderBlockProps<ComponentBlock>
>(
  () =>
    import(
      /* webpackChunkName: "featuredProductComponent.component" */ '~/components/canvas/components/featuredProduct/FeaturedProduct'
    )
);

export const FeaturedRow = loadable<RenderBlockProps<ComponentBlock>>(
  () =>
    import(
      /* webpackChunkName: "featuredRow.component" */ '~/components/canvas/components/featuredRow/FeaturedRow'
    )
);
