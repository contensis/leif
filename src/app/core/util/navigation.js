import queryString from 'query-string';

export function queryParams(search) {
  return queryString.parse(
    typeof window !== 'undefined' ? window.location.search : search
  );
}
export const routeParams = staticRoute =>
  staticRoute && staticRoute.match ? staticRoute.match.params : {};

export const buildUrl = (route, params) => {
  const qs = queryString.stringify(params);
  const path = qs ? `${route}?${qs}` : route;
  return path;
};

export const clientHostname = () =>
  `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

export const addHostname =
  typeof window === 'undefined' || window.location.host === 'localhost:3000'
    ? `https://${PUBLIC_URI /* global PUBLIC_URI */}`
    : clientHostname();

export const getUrlFromNavigationSettings = (entry, recursed = false) => {
  const legacyRouting = !(
    CONTENSIS_VERSION /* global CONTENSIS_VERSION */ >= '12' &&
    CUSTOM_ROUTING /* global CUSTOM_ROUTING */ !== 'true'
  );

  if (!entry || !entry.sys) return null;

  if (!legacyRouting && entry.sys.uri) return entry.sys.uri;

  if (entry.sys.slug === 'homepage') return '/';

  let path = '';
  if (entry.navigationSettings && entry.navigationSettings.parent) {
    path += getUrlFromNavigationSettings(entry.navigationSettings.parent, true);
  }

  return (
    (!entry.sys.slug
      ? path
      : `${path}/${entry.sys.slug}`.replace(/\/\//g, '/')) +
    (!legacyRouting && !recursed ? '#NoSysUri' : '')
  );
};

export const getParentUrlFromNavigationSettings = entry => {
  return getUrlFromNavigationSettings(
    entry && entry.navigationSettings && entry.navigationSettings.parent,
    true
  );
};

export const getLeafSlugFromRoute = currentPath => {
  let pathParts = currentPath.split('/');
  return pathParts[pathParts.length - 1];
};

export const validateRouteFromNavigationSettings = (currentPath, entry) => {
  if (!entry) {
    return false;
  }
  let routeValidationResult = true;
  let validatedPath = getUrlFromNavigationSettings(entry, true);
  if (
    validatedPath !== currentPath &&
    currentPath !== '/' &&
    !currentPath.startsWith('*')
  ) {
    routeValidationResult = false;
  }
  return routeValidationResult;
};
