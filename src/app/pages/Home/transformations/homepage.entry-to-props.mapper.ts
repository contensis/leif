import { mapComposer } from '~/core/util/json-mapper';

import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { landingHeroPropsMapping } from '~/components/landingHero/transformations/landinghero-component-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';

export const homepageHeroProps = {
  metadataProps: { ...pageMetadataPropsMapping },
  homeHeroProps: { ...landingHeroPropsMapping },
  contentComposerProps: ({ bodyContent }: any) => {
    return {
      items: mapComposer(bodyContent, composerPropsMapping),
      isHomepage: true,
    };
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
