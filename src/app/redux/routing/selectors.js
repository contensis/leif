import { getIn, navigation } from '@zengenti/contensis-react-base/redux';
import { selectors } from '@zengenti/contensis-react-base/routing';

export const selectCurrentNodeChildren = state =>
  selectors.selectCurrentChildren(state);

export const selectCurrentNodeAncestors = state =>
  selectors.selectCurrentAncestors(state);

export const selectCurrentNodeParentId = state =>
  getIn(selectors.selectCurrentNode(state), 'parentId');

export const selectCurrentNodeId = state =>
  getIn(selectors.selectCurrentNode(state), 'id');

export const selectNavigationRootChildren = state =>
  getIn(navigation.selectors.selectNavigationRoot(state), 'children');

export const selectCurrentLocationQueryStringParams = state =>
  selectors.selectCurrentSearch(state);

export const selectCurrentPathname = state =>
  selectors.selectCurrentPath(state);

export const selectCurrentNodeSiblings = state =>
  selectors.selectCurrentSiblings(state);
