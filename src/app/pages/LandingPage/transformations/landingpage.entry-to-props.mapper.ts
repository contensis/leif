import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { renderHeroPropsMapper } from '~/components/renderHero/transformations/renderhero.components-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';

export const landingPagePropsMapping = {
  landingPageHeroProps: { ...renderHeroPropsMapper },
  leadParagraphProps: {
    text: 'leadParagraph',
    type: {
      $path: 'type',
      $default: 'center',
    },
  },
  contentComposerProps: ({ bodyContent }: any) =>
    mapComposer(bodyContent, composerPropsMapping),
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
