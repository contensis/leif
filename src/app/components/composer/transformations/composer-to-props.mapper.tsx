import { mapComposer } from '~/core/util/json-mapper';

import { ImagePropsMapping } from '~/components/image/Image.mapper';
import { CalloutPropsMapping } from '~/components/callout/Callout.mapper';
import { iconListPropsMapping } from '~/components/iconList/transformations/iconList.component-to-props.mapper';
import { ComposerComponents } from '~/core/schema';
import { FeaturedProductMapping } from '~/components/featuredProduct/FeaturedProduct.mapper';
import { VideoPropsMapping } from '~/components/videoPlayer/VideoPlayer.mapper';
import { accordionPropsMapping } from '~/components/accordion/transformations/accordion.component-to-props.mapper';
import { contentBlockRowPropsMapping } from '~/components/contentBlockRow/transformations/contentblockrow.component-to-props.mapper';
import { promotedProductPropsMapping } from '~/components/promotedProduct/transformations/promotedproduct.component-to-props.mapper';
import { featuredBlogPostPropsMapping } from '~/components/relatedContent/transformations/relatedcontent.component-to-props.mapper';
import { featuredReviewsPropsMapping } from '~/components/testimonialSlider/transformations/testimonialslider.component-to-props.mapper';
import {
  curatedProductSliderPropsMapping,
  filteredProductSliderPropsMapping,
} from '~/components/productSlider/transformations/productslider.component-to-props.mapper';
import { textBlockPropsMapping } from '~/components/textBlock/transformations/textblock.component-to-props.mapper';

import MappingTemplate from 'jsonpath-mapper/dist/models/Template';

declare type ComposerMappings<S = any> = {
  [composerItemType: string]: MappingTemplate<S>;
};

export const composerPropsMapping = {
  [ComposerComponents.textBlock]: { text: '.' },
  [ComposerComponents.markup]: { text: '.' },
  [ComposerComponents.twitterEmbed]: { tweet: '.' },
  [ComposerComponents.blockQuote]: { quote: 'text' },
  [ComposerComponents.iconList]: iconListPropsMapping,
  [ComposerComponents.callout]: CalloutPropsMapping,
  [ComposerComponents.image]: ImagePropsMapping,
  [ComposerComponents.featuredProduct]: FeaturedProductMapping,
  [ComposerComponents.video]: VideoPropsMapping,
  [ComposerComponents.accordionList]: accordionPropsMapping,
  [ComposerComponents.bodyCopy]: textBlockPropsMapping,
  [ComposerComponents.curatedProductSlider]: curatedProductSliderPropsMapping,
  [ComposerComponents.filteredProductSlider]: filteredProductSliderPropsMapping,
  [ComposerComponents.featuredBlogPosts]: featuredBlogPostPropsMapping,
  [ComposerComponents.featuredReviews]: featuredReviewsPropsMapping,
  [ComposerComponents.promotedProduct]: promotedProductPropsMapping,
  [ComposerComponents.contentBlockRow]: contentBlockRowPropsMapping,
} as ComposerMappings;

const contentComposerMapper =
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

export default contentComposerMapper;
