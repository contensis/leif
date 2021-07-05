export const selectCurrentNodeChildren = state =>
  state.getIn(['routing', 'currentNode', 'children']);

export const selectCurrentNodeAncestors = state =>
  state.getIn(['routing', 'currentNodeAncestors']);

export const selectCurrentNodeParentId = state =>
  state.getIn(['routing', 'currentNode', 'parentId']);

export const selectCurrentNodeId = state =>
  state.getIn(['routing', 'currentNode', 'id']);

export const selectNavigationRootChildren = state =>
  state.getIn(['navigation', 'root', 'children']);

export const selectCurrentLocationQueryStringParams = state => {
  return state.getIn(['routing', 'location', 'search']);
};

export const selectCurrentPathname = state => {
  return state.getIn(['routing', 'location', 'pathname']);
};

export const selectCurrentNodeSiblings = state => {
  return state.getIn(['routing', 'currentNodeSiblings']);
};
