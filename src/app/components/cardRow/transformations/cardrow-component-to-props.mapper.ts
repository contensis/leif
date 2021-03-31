import mapJson from '~/core/util/json-mapper';

export const cardRowPropsMapping = {
  title: 'entryTitle',
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys && sys.uri,
  },
  heroIllustrationUri: {
    $path: 'heroIllustration',
    $formatting: (type: string) => {
      if (!type) return null;
      type = type.toLowerCase().replace(/ /g, '-');
      return `/static/img/illustrations/${type}.png`;
    },
  },
  heroIllustrationAlt: 'heroIllustration',
  imageUri: {
    $path: ['primaryImage', 'heroImage'],
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: ['altText', 'caption', 'asset.title'],
};

export const cardRowPropsMapper = {
  results: ({ relatedContent }: any) => {
    const contentArray = [];
    const columnArray = [];
    for (let i = 0; i < relatedContent.length; i++) {
      if (relatedContent.length > 3) {
        if (i < 2) {
          contentArray.push(relatedContent[i]);
        } else {
          columnArray.push(relatedContent[i]);
        }
      } else if (relatedContent.length <= 3) {
        if (i <= 2) {
          contentArray.push(relatedContent[i]);
        } else {
          columnArray.push(relatedContent[i]);
        }
      }
    }
    return {
      contentArray: contentArray.map((res: any) =>
        mapJson(res, cardRowPropsMapping)
      ),
      columnArray: columnArray.map((res: any) =>
        mapJson(res, cardRowPropsMapping)
      ),
    };
  },
};
