import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { landingHeroPropsMapper } from '~/components/landingHero/transformations/landinghero-component-to-props.mapper';
import { cardRowPropsMapper } from '~/components/cardRow/transformations/cardrow-component-to-props.mapper';

export const landingPagePropsMapping = {
  landingPageHeroProps: { ...landingHeroPropsMapper },
  relatedContentProps: { ...cardRowPropsMapper },
  leadParagraphProps: {
    text: 'leadParagraph',
    type: () => 'center',
  },
  contentComposerProps: ({ bodyContent }: any) =>
    mapComposer(bodyContent, composerPropsMapping),
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
