import Loadable from './loadable';

export const Accordion = Loadable(
  () =>
    import(
      /* webpackChunkName: "accordion" */ '~/components/accordion/Accordion'
    )
);
export const Callout = Loadable(
  () => import(/* webpackChunkName: "callout" */ '~/components/callout/Callout')
);
export const ContentBlockRow = Loadable(
  () =>
    import(
      /* webpackChunkName: "content-block-row" */ '~/components/contentBlockRow/ContentBlockRow'
    )
);
export const FeaturedProduct = Loadable(
  () =>
    import(
      /* webpackChunkName: "featured-product" */ '~/components/featuredProduct/FeaturedProduct'
    )
);
export const IconList = Loadable(
  () =>
    import(/* webpackChunkName: "icon-list" */ '~/components/iconList/IconList')
);
export const ImageBlock = Loadable(
  () =>
    import(
      /* webpackChunkName: "image-block" */ '~/components/imageBlock/ImageBlock'
    )
);
export const ProductSlider = Loadable(
  () =>
    import(
      /* webpackChunkName: "product-slider" */ '~/components/productSlider/ProductSlider'
    )
);
export const PromotionalBlock = Loadable(
  () =>
    import(
      /* webpackChunkName: "promotional-block" */ '~/components/promotedProduct/PromotedProduct'
    )
);
export const QuoteBlock = Loadable(
  () =>
    import(
      /* webpackChunkName: "quote-block" */ '~/components/quoteBlock/QuoteBlock'
    )
);
export const RelatedContent = Loadable(
  () =>
    import(
      /* webpackChunkName: "related-content" */ '~/components/relatedContent/RelatedContent'
    )
);
export const TestimonialSlider = Loadable(
  () =>
    import(
      /* webpackChunkName: "testimonial-slider" */ '~/components/testimonialSlider/TestimonialSlider'
    )
);
export const TextBlock = Loadable(
  () =>
    import(
      /* webpackChunkName: "text-block" */ '~/components/textBlock/TextBlock'
    )
);
export const TwitterCard = Loadable(
  () =>
    import(
      /* webpackChunkName: "twitter-card" */ '~/components/twitterCard/TwitterCard'
    )
);
export const VideoPlayer = Loadable(
  () =>
    import(
      /* webpackChunkName: "video-player" */ '~/components/videoPlayer/VideoPlayer'
    )
);
