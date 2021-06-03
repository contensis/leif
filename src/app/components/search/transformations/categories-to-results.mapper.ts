import { SearchTransformations } from '@zengenti/contensis-react-base/search';
import { ContentTypes } from '~/core/schema';
import { mapEntries } from '~/core/util/json-mapper';

const categoryMapping = {
  title: 'entryTitle',
  slug: 'sys.slug',
};

export const mappers = {
  [ContentTypes.category]: categoryMapping,
};

const mapEntriesToResults: SearchTransformations['results'] = entries =>
  mapEntries(entries, mappers);

export default mapEntriesToResults;
