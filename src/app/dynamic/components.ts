import loadable from '@loadable/component';

import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

import {
  RenderBlockProps,
  ComponentBlock,
  // ListBlock,
  ImageBlock,
  QuoteBlock,
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
      /* webpackChunkName: "quote.component" */ '~/components/canvas/blocks/quote/quote.block'
    )
);

// Components
export const FeaturedProductComponent = loadable<
  RenderBlockProps<ComponentBlock>
>(
  () =>
    import(
      /* webpackChunkName: "featuredProductComponent.component" */ '~/components/canvas/components/featuredProduct/featuredProduct'
    )
);
