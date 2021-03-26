export const selectCurrentNodeChildren = state =>
  state.getIn(['routing', 'currentNode', 'children']);
