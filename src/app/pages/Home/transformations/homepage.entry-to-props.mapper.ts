import { mapComposer } from '~/core/util/json-mapper';

import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { landingHeroPropsMapper } from '~/components/landingHero/transformations/landinghero-component-to-props.mapper';

export const homepageHeroProps = {
  homeHeroProps: { ...landingHeroPropsMapper },
  contentComposerProps: ({ bodyContent }: any) => {
    return {
      items: mapComposer(bodyContent, composerPropsMapping),
      isHomepage: true,
    };
  },
  // relatedContentProps: {
  //   title: () => 'Read now',
  //   linkUri: () => '/blog',
  //   linkLabel: () => 'View all blogs',
  // },
};
