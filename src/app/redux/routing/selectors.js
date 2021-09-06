import { navigation } from '@zengenti/contensis-react-base/redux';
import { selectors } from '@zengenti/contensis-react-base/routing';

export const selectCurrentNodeChildren = state =>
  selectors.selectCurrentChildren(state);

export const selectCurrentNodeAncestors = state =>
  selectors.selectCurrentAncestors(state);

export const selectCurrentNodeParentId = state =>
  selectors.selectCurrentNode(state)?.get('parentId');

export const selectCurrentNodeId = state =>
  selectors.selectCurrentNode(state)?.get('id');

export const selectNavigationRootChildren = state =>
  navigation.selectors.selectNavigationRoot(state)?.get('children');

export const selectCurrentLocationQueryStringParams = state =>
  selectors.selectCurrentSearch(state);

export const selectCurrentPathname = state =>
  selectors.selectCurrentPath(state);

export const selectCurrentNodeSiblings = state =>
  selectors.selectCurrentSiblings(state);
