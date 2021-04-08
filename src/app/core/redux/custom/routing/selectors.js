export const selectCurrentNodeChildren = state =>
  state.getIn(['routing', 'currentNode', 'children']);

export const selectNavigationRootChildren = state =>
  state.getIn(['navigation', 'root', 'children']);

export const selectCurrentLocationQueryStringParams = state => {
  return state.getIn(['routing', 'location', 'search']);
};
