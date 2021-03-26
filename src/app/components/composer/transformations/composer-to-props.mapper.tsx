import { imagePropsMapping } from '~/components/image/transformations/image.component-to-props.mapper';
import { calloutPropsMapping } from '~/components/callout/transformations/callout.component-to-props.mapper';
import { iconListPropsMapping } from '~/components/iconList/transformations/iconList.component-to-props.mapper';
import { ComposerComponents } from '~/core/schema';
import { featuredProductMapping } from '~/components/featuredProduct/transformations/featuredproduct.component-to-props.mapper';
import { videoPropsMapping } from '~/components/videoPlayer/transformations/videoplayer.component-to-props.mapper';
import { accordionPropsMapping } from '~/components/accordion/transformations/accordion.component-to-props.mapper';
import { contentBlockRowPropsMapping } from '~/components/contentBlockRow/transformations/contentblockrow.component-to-props.mapper';
import { promotedProductPropsMapping } from '~/components/promotedProduct/transformations/promotedproduct.component-to-props.mapper';
import { featuredBlogPostPropsMapping } from '~/components/relatedContent/transformations/relatedcontent.component-to-props.mapper';
import { featuredReviewsPropsMapping } from '~/components/testimonialSlider/transformations/testimonialslider.component-to-props.mapper';
import {
  curatedProductSliderPropsMapping,
  filteredProductSliderPropsMapping,
} from '~/components/productSlider/transformations/productslider.component-to-props.mapper';

export const composerPropsMapping = {
  [ComposerComponents.textBlock]: { text: '.' },
  [ComposerComponents.markup]: { text: '.' },
  [ComposerComponents.twitterEmbed]: { tweet: '.' },
  [ComposerComponents.blockQuote]: { quote: 'text' },
  [ComposerComponents.iconList]: { ...iconListPropsMapping },
  [ComposerComponents.callout]: { ...calloutPropsMapping },
  [ComposerComponents.image]: { ...imagePropsMapping },
  [ComposerComponents.featuredProduct]: { ...featuredProductMapping },
  [ComposerComponents.video]: { ...videoPropsMapping },
  [ComposerComponents.accordionList]: { ...accordionPropsMapping },
  [ComposerComponents.curatedProductSlider]: {
    ...curatedProductSliderPropsMapping,
  },
  [ComposerComponents.filteredProductSlider]: {
    ...filteredProductSliderPropsMapping,
  },
  [ComposerComponents.featuredBlogPosts]: {
    ...featuredBlogPostPropsMapping,
  },
  [ComposerComponents.featuredReviews]: {
    ...featuredReviewsPropsMapping,
  },
  [ComposerComponents.promotedProduct]: {
    ...promotedProductPropsMapping,
  },
  [ComposerComponents.contentBlockRow]: {
    ...contentBlockRowPropsMapping,
  },
};
