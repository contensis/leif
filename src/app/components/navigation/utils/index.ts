// Types
import { NavigationProps, NavigationCuratedObject } from '../Navigation.d';

// Navigation Dictionary
const NAV_DICTIONARY: any = {
  '/products/pots': '/products/shop?contentTypeId=pot',
  '/products/plants': '/products/shop?contentTypeId=plant',
};

const _showChildren = (element: NavigationProps) =>
  element.includeInMenu === true;

// Generates Navigation Object
const _generateObject = (children: any) => {
  let childObject: any = {};

  children.map((child: NavigationProps) => {
    if (!child.includeInMenu) return null;

    // Use path defined in NAV_DICTIONARY if there is one
    const PATH = NAV_DICTIONARY[child.path]
      ? NAV_DICTIONARY[child.path]
      : child.path;

    const navItem = {
      displayName: child.displayName,
      slug: child.slug,
      path: PATH,
      childCount: child.childCount,
      id: child.id,
      showChildren: child.children.some(_showChildren),
      includeInMenu: child.includeInMenu,
    };
    childObject[child.slug] = navItem;
  });
  return childObject;
};

export const _generateNavigation = (navigation: NavigationProps) => {
  let navObject: NavigationCuratedObject = { level_1: {}, level_2: {} };

  // Generates level_1 navigation items.
  navObject['level_1'] = _generateObject(navigation);

  // Generates level_2 navigation items.
  navigation.map((lvlOne: NavigationProps) => {
    const { children, slug, childCount, includeInMenu } = lvlOne || {};
    const hasChildren = childCount && childCount >= 1 && includeInMenu;
    if (hasChildren) {
      if (_generateObject(children)) {
        navObject['level_2'][slug] = _generateObject(children);
      }
    }
  });
  // Returns the navObject with level_1 and level_2 objects combined
  return navObject;
};
