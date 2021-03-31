import React from 'react';
import Card from '../card/Card';
import CardRowStyled from './CardRow.styled';

export interface Props {
  className?: string;
  results: any;
}

const CardRow = ({ className, results }: Props) => {
  if (!results || results.length < 1) return null;
  const { contentArray, columnArray } = results;

  return (
    <CardRowStyled className={className}>
      {contentArray && contentArray.length >= 1 && (
        <div className="card-row__left-col">
          {contentArray.map((res: any, idx: number) => {
            return (
              <Card
                key={idx}
                className="card-row__col-card"
                type="content"
                {...res}
              />
            );
          })}
        </div>
      )}
      {columnArray && columnArray.length >= 1 && (
        <div className="card-row__right-col">
          {columnArray.map((res: any, idx: number) => {
            return (
              <Card
                key={idx}
                className="card-row__col-card--small"
                type="content"
                {...res}
              />
            );
          })}
        </div>
      )}
    </CardRowStyled>
  );
};

export default CardRow;
