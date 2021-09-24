export const landingHeroPropsMapping = {
  hasIllustration: {
    $path: ['heroImage', 'heroIllustration'],
    $formatting: (hero: any) => (hero.asset || hero === 'None' ? false : true),
    $default: () => false,
  },
  heroIllustrationUri: {
    $path: 'heroIllustration',
    $formatting: (type: string) => {
      if (!type) return null;
      type = type.toLowerCase().replace(/ /g, '-');
      return `/static/img/illustrations/${type}.png`;
    },
  },
  heroIllustrationAlt: 'Illustration',
  imageUri: {
    $path: 'heroImage.asset.sys.uri',
  },
  imageAlt: ['heroImage.altText', 'heroImage.caption', 'heroImage.asset.title'],
  title: 'title',
  summary: 'summary',
  ctaLink: {
    $path: 'buttonLink.sys.uri',
  },
  ctaText: ['buttonLabel', 'buttonLink.entryTitle'],
};
