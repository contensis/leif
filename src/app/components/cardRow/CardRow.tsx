import React from 'react';
import Card from '../card/Card';
import RelatedLinks from '../relatedLinks/RelatedLinks';
import CardRowStyled from './CardRow.styled';

export interface Props {
  results: any;
  relatedLinks: any;
}

const CardRow = ({ results, relatedLinks }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <CardRowStyled>
      <div className="card-row__cards">
        {results.map((res: any, idx: number) => {
          return (
            <Card
              key={idx}
              className="card-row__card"
              type="content"
              title={res.title}
              text={res.text}
              image={res.image}
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
