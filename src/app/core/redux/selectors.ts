import {
  navigation,
  routing,
  version,
} from '@zengenti/contensis-react-base/redux';

export const {
  hasNavigationTree,
  selectNavigationRoot,
  selectNavigationDepends,
} = navigation.selectors;

export const {
  selectBreadcrumb,
  selectCurrentAncestors,
  selectCurrentChildren,
  selectCurrentHostname,
  selectCurrentNode,
  selectCurrentPath,
  selectCurrentProject,
  selectCurrentSearch,
  selectCurrentSiblings,
  selectIsNotFound,
  selectQueryStringAsObject,
  selectRouteEntry,
  selectRouteEntryContentTypeId,
  selectRouteEntryEntryId,
  selectRouteEntryID,
  selectRouteEntrySlug,
  selectRouteLoading,
} = routing.selectors;

export const { selectCommitRef, selectBuildNumber, selectVersionStatus } =
  version.selectors;
