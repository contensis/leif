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

export type Props = { isContentPage?: boolean } & (
  | ({ _type: 'accordionList' } & AccordionProps)
  | ({ _type: 'callout' } & CalloutProps)
  | ({ _type: 'contentBlockRow' } & ContentBlockRowProps)
  | ({ _type: 'featuredProduct' } & FeaturedProductProps)
  | ({ _type: 'iconList' } & IconListProps)
  | ({ _type: 'image' } & ImageBlockProps)
  | ({
      _type: 'productSlider' | 'curatedProductSlider' | 'filteredProductSlider';
    } & ProductSliderProps)
  | ({ _type: 'promotedProduct' } & PromotedProductProps)
  | ({ _type: 'blockQuote' } & QuoteBlockProps)
  | ({ _type: 'featuredBlogPosts' } & RelatedContentProps)
  | ({ _type: 'featuredReviews' } & TestimonialSliderProps)
  | ({ _type: 'bodyCopy' | 'markup' | 'textBlock' } & TextBlockProps)
  | ({ _type: 'twitterEmbed' } & TwitterCardProps)
  | ({ _type: 'video' } & VideoPlayerProps)
);
