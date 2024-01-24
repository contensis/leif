import React from 'react';
import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import Card from '~/components/card/Card';
import CardRowStyled from '~/components/cardRow/CardRow.styled';

export interface ContentItem {
  entryTitle: string;
  entryDescription: string;
  entryThumbnail: any;
  thumbnailImage: any;
  externalCardImage: any;
  plantVariant: any[];
  sys: {
    id: string;
    language: string;
    contentTypeId: string;
    dataFormat: string;
    uri: string;
    version: any;
  };
}

export interface Props {
  contentItems: ContentItem[];
}

const FeaturedRow = (props: RenderBlockProps<ComponentBlock<Props>>) => {
  const { value } = props.block;

  if (!value || !value.contentItems || value.contentItems.length < 1)
    return null;

  return (
    <CardRowStyled>
      <div className="card-row__left-col">
        {value.contentItems.map((item, idx) => {
          const prices = item?.plantVariant?.map(variant => variant?.price);

          const mappedCardProps = {
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

          return (
            <Card
              key={idx}
              className="card-row__col-card"
              type="product"
              {...mappedCardProps}
            />
          );
        })}
      </div>
    </CardRowStyled>
  );
};

export default FeaturedRow;
