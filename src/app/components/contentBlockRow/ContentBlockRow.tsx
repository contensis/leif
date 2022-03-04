import React from 'react';

import Card from '../card/Card';
import ContentBlockRowStyled from './ContentBlockRow.styled';

export interface Props {
  className?: string;
  results: any;
}

const ContentBlockRow = ({ className, results }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <ContentBlockRowStyled className={className}>
      {results.map((res: any, idx: number) => {
        if (!res || !res.title) return null;
        return <Card key={idx} className="content-block__card" {...res} />;
      })}
    </ContentBlockRowStyled>
  );
};

export default ContentBlockRow;
