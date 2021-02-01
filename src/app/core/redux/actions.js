import {
  navigation,
  routing,
  user,
  version,
} from '@zengenti/contensis-react-base/redux';

export const { loadNavigationTree } = navigation.actions;

export const {
  setCurrentProject,
  setNavigationPath,
  setNotFound,
  setRoute,
  setRouteEntry,
} = routing.actions;

export const {
  loginUser,
  validateUser,
  logoutUser,
  toggleLoginMode,
  createUserAccount,
  forgotPassword,
  changePassword,
  setRecaptchaKey,
  setRecaptchaResponse,
} = user.actions;

export const { setVersion, setVersionStatus } = version.actions;
