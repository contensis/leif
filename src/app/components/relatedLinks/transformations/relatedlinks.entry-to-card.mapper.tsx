export const relatedLinksMapper = {
  title: 'entryTitle',
  imageUri: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
  },
  imageAlt: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      (img && img.altText) || img.caption || (img.asset && img.asset.title),
  },
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
};
