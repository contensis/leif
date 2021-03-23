export const contentHeroPropsMapper = {
  hasIllustration: {
    $path: ['heroImage', 'heroIllustration'],
    $formatting: (hero: any) => (hero.asset ? false : true),
    $default: false,
  },
  heroIllustrationUri: {
    $path: 'heroIllustration',
    $formatting: (type: string) => {
      if (!type) return null;
      type = type.toLowerCase().replace(/ /g, '-');
      return `/static/img/illustrations/${type}.png`;
    },
  },
  isFullWidth: {
    $path: 'title',
    $formatting: (title: string) => (title.length > 64 ? true : false),
    $default: false,
  },
  heroIllustrationAlt: 'heroIllustration',
  bgImageUri: {
    $path: 'heroImage',
    $formatting: (img: any) => {
      return img && img.asset && img.asset.sys && img.asset.sys.uri;
    },
  },
  title: 'title',
};
