import { landingHeroPropsMapping } from '~/components/landingHero/transformations/landinghero-component-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';
import contentComposerMapper from '~/components/composer/transformations/composer-to-props.mapper';

export const homepageHeroProps = {
  metadataProps: { ...pageMetadataPropsMapping },
  homeHeroProps: { ...landingHeroPropsMapping },
  contentComposerProps: contentComposerMapper({ isHomepage: true }),
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
