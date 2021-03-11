import React from 'react';
import Card from '../card/Card';
import RelatedLinks from '../relatedLinks/RelatedLinks';
import CardRowStyled from './CardRow.styled';

export interface Props {
  className?: string;
  results: any;
  relatedLinks: any;
}

const CardRow = ({ className, results, relatedLinks }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <CardRowStyled className={className}>
      <div className="card-row__cards">
        {results.map((res: any, idx: number) => {
          return (
            <Card
              key={idx}
              className="card-row__card"
              type="content"
              {...res}
            />
          );
        })}
      </div>
      {relatedLinks && (
        <div className="card-row__related-links">
          <RelatedLinks links={relatedLinks} />
        </div>
      )}
    </CardRowStyled>
  );
};

export default CardRow;
