const STATIC_ROUTE = '/static/img/illustrations/';
export const ContentGenericHeroMapping = {
  type: {
    $path: 'title',
    $formatting: (title: string) =>
      title.length >= 42 ? 'full-width' : 'two-column',
  },
  title: 'entryTitle',
  image: {
    src: {
      $path: 'heroIllustration',
      $formatting: (type: string) => {
        if (!type) return;
        return `${STATIC_ROUTE}${type.toLowerCase().replace(/ /g, '-')}.png`;
      },
    },
    alt: 'heroIllustration',
  },
};

export const ContentHeroPropsMapping = {
  hasIllustration: {
    $path: ['heroImage', 'heroIllustration'],
    $formatting: (hero: any) => (hero.asset || hero === 'None' ? false : true),
  },
  illustrationProps: ContentGenericHeroMapping,
  type: {
    $path: 'heroImage.asset.sys.uri',
    $formatting: (image: string) => (image ? 'hero-image' : 'no-image'),
  },
  title: 'entryTitle',
  image: {
    src: 'heroImage.asset.sys.uri',
    alt: 'heroImage.altText',
  },
};
