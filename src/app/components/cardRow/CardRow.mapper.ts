import mapJson from '~/core/util/json-mapper';

export const CardRowPropsMapping = {
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
    $path: ['primaryImage.asset.sys.uri', 'heroImage.asset.sys.uri'],
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: ['altText', 'caption', 'asset.title'],
};

export const CardRowPropsMapper = {
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
        mapJson(res, CardRowPropsMapping)
      ),
      columnArray: columnArray.map((res: any) =>
        mapJson(res, CardRowPropsMapping)
      ),
    };
  },
};

/** Mapper for Canvas - Comeback to this. There must be a better way to map this data */

export const CardRowCanvasMapping = {
  results: {
    $path: 'block.value',
    $formatting: ({ contentItems }) => {
      const contentArray = [];
      const columnArray = [];
      for (let i = 0; i < contentItems.length; i++) {
        if (contentItems.length > 3) {
          if (i < 2) {
            contentArray.push(contentItems[i]);
          } else {
            columnArray.push(contentItems[i]);
          }
        } else if (contentItems.length <= 3) {
          if (i <= 2) {
            contentArray.push(contentItems[i]);
          } else {
            columnArray.push(contentItems[i]);
          }
        }
      }
      return {
        contentArray: contentArray.map((res: any) =>
          mapJson(res, CardRowPropsMapping)
        ),
        columnArray: columnArray.map((res: any) =>
          mapJson(res, CardRowPropsMapping)
        ),
      };
    },
  },
};
