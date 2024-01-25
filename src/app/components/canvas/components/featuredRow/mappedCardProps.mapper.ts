import { ContentItem } from '~/components/canvas/components/featuredRow/card.props';

export const cardPropsMapper = (item: ContentItem) => {
  const prices = item?.plantVariant?.map((variant: any) => variant?.price);

  return {
    title: item.entryTitle,
    date: '',
    imageUri:
      item?.thumbnailImage?.asset?.sys?.uri ||
      item?.entryThumbnail?.asset?.sys?.uri ||
      item?.externalCardImage?.asset?.sys?.uri ||
      '',
    imageAlt:
      item?.thumbnailImage?.altText ||
      item?.entryThumbnail?.altText ||
      item?.externalCardImage?.altText ||
      '',
    contentTypes: [item.sys.contentTypeId],
    isPromoted: false,
    path: '',
    price: prices,
    uri: item?.sys?.uri,
  };
};
