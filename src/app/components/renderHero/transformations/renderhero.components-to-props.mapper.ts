export const renderHeroPropsMapper = {
  title: 'entryTitle',
  summary: 'hero.summary',
  type: {
    $path: 'hero',
    $formatting: (hero: any) => {
      if (hero.summary) {
        return 'Landing hero';
      } else {
        return hero.layoutType;
      }
    },
    $default: 'Two column',
  },
  imageUri: {
    $path: 'hero.image',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
  },
  imageAlt: {
    $path: 'hero.image',
    $formatting: (img: any) =>
      (img && img.asset && img.asset.title) || img.altText || img.caption,
  },
  ctaText: 'hero.linkText',
  ctaLink: {
    $path: 'hero',
    $formatting: (hero: any) =>
      (hero.linkToInternalContent &&
        hero.linkToInternalContent.sys &&
        hero.linkToInternalContent.sys.uri) ||
      hero.linkToExternalContent,
  },
};
