import mapStateToSearchUri from './state-to-searchuri';
import mapEntriesToResults from './entry-to-cardprops.mapper';
import mapEntriesToFilterItems from './entries-to-filteritems.mapper';
import mapStateToResultsInformation from './state-to-resultsinformationprops.mapper';
import mapCategoriesToResults from './categories-to-results.mapper';

export default {
  filterItems: mapEntriesToFilterItems,
  navigate: mapStateToSearchUri,
  results: mapEntriesToResults,
  categories: mapCategoriesToResults,
  resultsInfo: mapStateToResultsInformation,
};
