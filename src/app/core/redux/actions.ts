import {
  navigation,
  routing,
  version,
} from '@zengenti/contensis-react-base/redux';

export const { loadNavigationTree } = navigation.actions;

export const {
  setCurrentProject,
  setNavigationPath,
  setRoute,
  setRouteEntry,
} = routing.actions;

export const { setVersion, setVersionStatus } = version.actions;
