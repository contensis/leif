import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';

export const productListingPropsMapping = {
  metadataProps: { ...pageMetadataPropsMapping },
  title: 'entryTitle',
};
