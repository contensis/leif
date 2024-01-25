import React from 'react';
import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import Card from '~/components/card/Card';
import CardRowStyled from '~/components/cardRow/CardRow.styled';
import { ContentItem } from '~/components/canvas/components/featuredRow/card.props';
import { cardPropsMapper } from '~/components/canvas/components/featuredRow/mappedCardProps.mapper';

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
          const mappedCardProps = cardPropsMapper(item);

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
