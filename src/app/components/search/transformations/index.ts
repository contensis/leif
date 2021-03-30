import mapEntriesToResults from './entry-to-card-props.mapper';
import mapStateToResultsInformation from './state-to-resultsinformationprops.mapper';
import mapStateToSearchUri from './state-to-searchuri';
import mapEntriesToFilterItems from './entries-to-filteritems.mapper';

export default {
  results: mapEntriesToResults,
  resultsInfo: mapStateToResultsInformation,
  navigate: mapStateToSearchUri,
  filterItems: mapEntriesToFilterItems,
  // categories: mapCategoriesToResults,
};
