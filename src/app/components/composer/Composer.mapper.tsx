import { mapComposer } from '~/core/util/json-mapper';

import { ImagePropsMapping } from '~/components/image/Image.mapper';
import { CalloutPropsMapping } from '~/components/callout/Callout.mapper';
import { IconListPropsMapping } from '~/components/iconList/IconList.mapper';
import { ComposerComponents } from '~/core/schema';
import { FeaturedProductMapping } from '~/components/featuredProduct/FeaturedProduct.mapper';
import { VideoPropsMapping } from '~/components/videoPlayer/VideoPlayer.mapper';
import { AccordionPropsMapping } from '~/components/accordion/Accordion.mapper';
import { ContentBlockRowPropsMapping } from '~/components/contentBlockRow/ContentBlockRow.mapper';
import { PromotedProductPropsMapping } from '~/components/promotedProduct/PromotedProduct.mapper';
import { FeaturedBlogPostPropsMapping } from '~/components/relatedContent/RelatedContent.mapper';
import { FeaturedReviewsPropsMapping } from '~/components/testimonialSlider/TestimonialSlider.mapper';
import {
  CuratedProductSliderPropsMapping,
  FilteredProductSliderPropsMapping,
} from '~/components/productSlider/ProductSlider.mapper';
import { TextBlockPropsMapping } from '~/components/textBlock/TextBlock.mapper';

import MappingTemplate from 'jsonpath-mapper/dist/models/Template';

declare type ComposerMappings<S = any> = {
  [composerItemType: string]: MappingTemplate<S>;
};

export const composerPropsMapping = {
  [ComposerComponents.textBlock]: { text: '.' },
  [ComposerComponents.markup]: { text: '.' },
  [ComposerComponents.twitterEmbed]: { tweet: '.' },
  [ComposerComponents.blockQuote]: { quote: 'text' },
  [ComposerComponents.iconList]: IconListPropsMapping,
  [ComposerComponents.callout]: CalloutPropsMapping,
  [ComposerComponents.image]: ImagePropsMapping,
  [ComposerComponents.featuredProduct]: FeaturedProductMapping,
  [ComposerComponents.video]: VideoPropsMapping,
  [ComposerComponents.accordionList]: AccordionPropsMapping,
  [ComposerComponents.bodyCopy]: TextBlockPropsMapping,
  [ComposerComponents.curatedProductSlider]: CuratedProductSliderPropsMapping,
  [ComposerComponents.filteredProductSlider]: FilteredProductSliderPropsMapping,
  [ComposerComponents.featuredBlogPosts]: FeaturedBlogPostPropsMapping,
  [ComposerComponents.featuredReviews]: FeaturedReviewsPropsMapping,
  [ComposerComponents.promotedProduct]: PromotedProductPropsMapping,
  [ComposerComponents.contentBlockRow]: ContentBlockRowPropsMapping,
} as ComposerMappings;

const ContentComposerMapper =
  ({ isHomepage = false }) =>
  ({ bodyContent }: any) => {
    const promoComponentArray: number[] = [];
    const items = mapComposer(bodyContent, composerPropsMapping).map(
      (item, idx) => {
        if (item._type === ComposerComponents.promotedProduct) {
          const newItem = {} as any;
          Object.assign(newItem, item);

          promoComponentArray.push(idx);
          for (let i = 0; i < promoComponentArray.length; i++) {
            const isEven = i % 2 === 0 ? true : false;
            newItem.align = isEven ? 'left' : 'right';
            newItem.hasTrending =
              (idx === 0 && isHomepage) || (item.hasTrending && isHomepage)
                ? true
                : false;
          }
          return newItem;
        } else {
          return item;
        }
      }
    );

    return {
      items,
      isHomepage,
    };
  };

export default ContentComposerMapper;
