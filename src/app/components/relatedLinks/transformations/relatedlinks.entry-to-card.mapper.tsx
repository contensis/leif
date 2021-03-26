export const relatedLinksMapper = {
  title: 'displayName',
  path: 'path',
  imageUri: {
    $path: 'entry.primaryImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
  },
  imageAlt: {
    $path: 'entry.primaryImage',
    $formatting: (img: any) =>
      (img && img.altText) || img.caption || (img.asset && img.asset.title),
  },
};
