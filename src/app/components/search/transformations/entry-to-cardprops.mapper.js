import { ContentTypes } from '~/core/schema';
import { mapEntries } from '~/core/util/json-mapper';

const baseMapping = {
  title: 'entryTitle',
  standfirst: 'standfirst',
  image: 'image.asset.sys.uri',
};

const articleCardMapping = {
  ...baseMapping,
  category: {
    $path: 'category',
    $formatting: {
      title: 'entryTitle',
      id: 'sys.id',
    },
  },
  featuredAcademic: {
    $path: 'featuredAcademic',
    $formatting: {
      name: 'entryTitle',
      id: 'sys.id',
    },
  },
  link: 'sys.uri',
  date: entry => entry.publishedDate || entry.sys.version.published,
};

export const mappers = {
  [ContentTypes.article]: articleCardMapping,
};

const mapEntriesToResults = entries => mapEntries(entries, mappers);

// const mapEntriesToResults = entries =>
//   entries.map(entry => {
//     debugger;
//     const template = mappers[entry.sys.contentTypeId];
//     const mappedToJson = mapJson(entry, template);
//     return mappedToJson;
//   });

export default mapEntriesToResults;
