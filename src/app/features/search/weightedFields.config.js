import { FreeTextWeights } from '~/core/schema';

export const base = [
  { fieldId: 'entryTitle', weight: FreeTextWeights.title },
  { fieldId: 'standfirst', weight: FreeTextWeights.standfirst },
  { fieldId: 'body[].content', weight: FreeTextWeights.content },
  { fieldId: 'body[].quote', weight: FreeTextWeights.content },
  { fieldId: 'body[].image', weight: FreeTextWeights.content },
  { fieldId: 'category[].title', weight: FreeTextWeights.category },
  { fieldId: 'metaContent.metaTitle', weight: FreeTextWeights.title },
  {
    fieldId: 'metaContent.metaDescription',
    weight: FreeTextWeights.description,
  },
  { fieldId: 'sys.uri', weight: FreeTextWeights.title },
];
