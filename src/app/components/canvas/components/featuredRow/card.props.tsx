export interface ContentItem {
  entryTitle: string;
  entryDescription: string;
  entryThumbnail?: {
    asset?: {
      sys?: {
        uri?: string;
      };
    };
    altText?: string;
  };
  thumbnailImage?: {
    asset?: {
      sys?: {
        uri?: string;
      };
    };
    altText?: string;
  };
  externalCardImage?: {
    asset?: {
      sys?: {
        uri?: string;
      };
    };
    altText?: string;
  };
  plantVariant: object[];
  sys: {
    contentTypeId: string;
    uri: string;
  };
}
