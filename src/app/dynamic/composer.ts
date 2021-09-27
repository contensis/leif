import loadable from '@loadable/component';

// Props Models
import { Props as AccordionProps } from '~/components/accordion/Accordion';
import { Props as CalloutProps } from '~/components/callout/Callout';
import { Props as ContentBlockRowProps } from '~/components/contentBlockRow/ContentBlockRow';
import { Props as FeaturedProductProps } from '~/components/featuredProduct/FeaturedProduct';
import { Props as IconListProps } from '~/components/iconList/IconList';
import { Props as ImageBlockProps } from '~/components/imageBlock/ImageBlock';
import { Props as ProductSliderProps } from '~/components/productSlider/ProductSlider';
import { Props as PromotedProductProps } from '~/components/promotedProduct/PromotedProduct';
import { Props as QuoteBlockProps } from '~/components/quoteBlock/QuoteBlock';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';
import { Props as TestimonialSliderProps } from '~/components/testimonialSlider/TestimonialSlider';
import { Props as TextBlockProps } from '~/components/textBlock/TextBlock';
import { Props as TwitterCardProps } from '~/components/twitterCard/TwitterCard';
import { Props as VideoPlayerProps } from '~/components/videoPlayer/VideoPlayer';

export const Accordion = loadable<AccordionProps>(
  () =>
    import(
      /* webpackChunkName: "accordion" */ '~/components/accordion/Accordion'
    )
);
export const Callout = loadable<CalloutProps>(
  () => import(/* webpackChunkName: "callout" */ '~/components/callout/Callout')
);
export const ContentBlockRow = loadable<ContentBlockRowProps>(
  () =>
    import(
      /* webpackChunkName: "content-block-row" */ '~/components/contentBlockRow/ContentBlockRow'
    )
);
export const FeaturedProduct = loadable<FeaturedProductProps>(
  () =>
    import(
      /* webpackChunkName: "featured-product" */ '~/components/featuredProduct/FeaturedProduct'
    )
);
export const IconList = loadable<IconListProps>(
  () =>
    import(/* webpackChunkName: "icon-list" */ '~/components/iconList/IconList')
);
export const ImageBlock = loadable<ImageBlockProps>(
  () =>
    import(
      /* webpackChunkName: "image-block" */ '~/components/imageBlock/ImageBlock'
    )
);
export const ProductSlider = loadable<ProductSliderProps>(
  () =>
    import(
      /* webpackChunkName: "product-slider" */ '~/components/productSlider/ProductSlider'
    )
);
export const PromotionalBlock = loadable<PromotedProductProps>(
  () =>
    import(
      /* webpackChunkName: "promotional-block" */ '~/components/promotedProduct/PromotedProduct'
    )
);
export const QuoteBlock = loadable<QuoteBlockProps>(
  () =>
    import(
      /* webpackChunkName: "quote-block" */ '~/components/quoteBlock/QuoteBlock'
    )
);
export const RelatedContent = loadable<RelatedContentProps>(
  () =>
    import(
      /* webpackChunkName: "related-content" */ '~/components/relatedContent/RelatedContent'
    )
);
export const TestimonialSlider = loadable<TestimonialSliderProps>(
  () =>
    import(
      /* webpackChunkName: "testimonial-slider" */ '~/components/testimonialSlider/TestimonialSlider'
    )
);
export const TextBlock = loadable<TextBlockProps>(
  () =>
    import(
      /* webpackChunkName: "text-block" */ '~/components/textBlock/TextBlock'
    )
);
export const TwitterCard = loadable<TwitterCardProps>(
  () =>
    import(
      /* webpackChunkName: "twitter-card" */ '~/components/twitterCard/TwitterCard'
    )
);
export const VideoPlayer = loadable<VideoPlayerProps>(
  () =>
    import(
      /* webpackChunkName: "video-player" */ '~/components/videoPlayer/VideoPlayer'
    )
);
