import mapJson, { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { relatedLinksMapper } from '~/components/relatedLinks/transformations/relatedlinks.entry-to-card.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { exploreMoreMapper } from '~/components/exploreMore/transformations/exploremore.component-to-props.mapper';

export const contentPagePropsMapping = {
  contentHeroProps: {
    title: 'entryTitle',
    summary: 'hero.summary',
    type: 'hero.layoutType',
    imageUri: {
      $path: 'hero.image',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
    },
    imageAlt: {
      $path: 'hero.image',
      $formatting: (img: any) =>
        (img && img.asset && img.asset.title) || img.altText || img.caption,
    },
    ctaText: 'hero.linkText',
    ctaLink: {
      $path: 'hero',
      $formatting: (hero: any) =>
        (hero.linkToInternalContent &&
          hero.linkToInternalContent.sys &&
          hero.linkToInternalContent.sys.uri) ||
        hero.linkToExternalContent,
    },
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  relatedLinksProps: {
    title: 'relatedLinksTitle',
    links: ({ relatedLinks }: any) => {
      return relatedLinks.map((link: any) => {
        return mapJson(link, relatedLinksMapper);
      });
    },
  },
  contentComposerProps: ({ bodyContent }: any) =>
    mapComposer(bodyContent, composerPropsMapping),
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  exploreMoreProps: {
    title: {
      $path: 'relatedContentTitle',
      $default: () => 'Explore more',
    },
    results: ({ relatedContent }: any) => {
      return relatedContent.map((link: any) => {
        return mapJson(link, exploreMoreMapper);
      });
    },
  },
};
