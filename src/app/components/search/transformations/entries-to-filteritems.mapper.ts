import { mapEntries } from '../../../core/util/json-mapper';
import { Fields, ContentTypes } from '../../../core/schema';
// *** FILTER ITEM MAPPING ***
// Base mapping, fields that are the same across all mappings
// to save repeating these elements in every mapper, spread this
// into your discrete mappings
const base = {
  contentTypeId: Fields.sys.contentTypeId,
  title: 'entryTitle',
  key: 'sys.id',
  path: 'sys.slug',
  isSelected: 'isSelected',
};

export const mappers = {
  [ContentTypes.category]: base,
  [ContentTypes.person]: base,
  [ContentTypes.plantType]: base,
};
const mapEntriesToFilterItems = (entries: any[]) =>
  mapEntries(entries, mappers);
export default mapEntriesToFilterItems;
