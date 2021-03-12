import mapEntriesToResults from './entry-to-card-props.mapper';
import mapStateToResultsInformation from './state-to-results-information-props.mapper';

export default {
  results: mapEntriesToResults,
  resultsInfo: mapStateToResultsInformation,
  // filterItems: mapEntriesToFilterItems,
  // navigate: mapStateToSearchUri,
  // categories: mapCategoriesToResults,
};
