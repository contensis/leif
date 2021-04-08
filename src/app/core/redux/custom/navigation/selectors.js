export const selectCurrentNodeChildren = state =>
  state.getIn(['routing', 'currentNode', 'children']);

export const selectNavigationRootChildren = state =>
  state.getIn(['navigation', 'root', 'children']);
