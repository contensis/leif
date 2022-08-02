import { mapComposer } from '~/core/util/json-mapper';

import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { externalPromotionPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';

export const eventPropsMapping = {
  metadataProps: { ...externalPromotionPropsMapping },
  eventHeroProps: {
    title: 'entryTitle',
    imageUri: {
      $path: 'primaryImage',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
    },
    imageAlt: [
      'primaryImage.altText',
      'primaryImage.caption',
      'primaryImage.asset.title',
    ],
    backLinkUri: () => '/events',
    backLinkLabel: () => 'Events',
    dateFrom: 'datePicker.from',
    dateTo: 'datePicker.to',
    hasPaddingBottom: false,
  },
  eventInformationProps: {
    location: 'location.entryTitle',
    organiser: 'organiser.name',
    date: 'datePicker.from',
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  contentComposerProps: {
    items: ({ postBody }: any) => mapComposer(postBody, composerPropsMapping),
  },
  relatedContentProps: {
    title: () => 'Read now',
    results: ({ relatedEvents }: any) => mapEntriesToResults(relatedEvents),
    linkUri: () => '/events',
    linkLabel: () => 'View all events',
  },
};
