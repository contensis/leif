import { FreeTextWeights } from '../../core/schema';

export const base = [
  { fieldId: 'entryTitle', weight: FreeTextWeights.title },
  { fieldId: 'entryDescription', weight: FreeTextWeights.description },
  { fieldId: 'searchContent', weight: FreeTextWeights.content },
  {
    fieldId: 'pageMetadata.metaDescription',
    weight: FreeTextWeights.description,
  },
];
