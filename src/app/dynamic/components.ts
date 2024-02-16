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
      /* webpackChunkName: "canvas.component" */ '~/components/canvas/Canvas'
    )
);

// Blocks

export const Image = loadable<RenderBlockProps<ImageBlock>>(
  () =>
    import(
      /* webpackChunkName: "image.component" */ '~/components/canvas/blocks/ImageCanvas.block'
    )
);
export const Quote = loadable<RenderBlockProps<QuoteBlock>>(
  () =>
    import(
      /* webpackChunkName: "quote.component" */ '~/components/canvas/blocks/QuoteCanvas.block'
    )
);

export const Video = loadable<RenderBlockProps<InlineEntryBlock>>(
  () =>
    import(
      /* webpackChunkName: "video.component" */ '~/components/canvas/blocks/VideoCanvas.block'
    )
);
export const Panel = loadable<RenderBlockProps<PanelBlock>>(
  () =>
    import(
      /* webpackChunkName: "panel.component" */ '~/components/canvas/blocks/PanelCanvas.block'
    )
);

// Components
export const FeaturedProductComponent = loadable<
  RenderBlockProps<ComponentBlock>
>(
  () =>
    import(
      /* webpackChunkName: "featuredProductComponent.component" */ '~/components/featuredProduct/FeaturedProduct.canvas'
    )
);

export const FeaturedRow = loadable<RenderBlockProps<ComponentBlock>>(
  () =>
    import(
      /* webpackChunkName: "featuredRow.component" */ '~/components/cardRow/CardRow.canvas'
    )
);
