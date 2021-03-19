import React from 'react';

import Card from '../card/Card';
import PromotedContentStyled from './PromotedContent.styled';

export interface Props {
  className?: string;
  title?: string;
  results: any;
}

const ExploreMore = ({ className, title, results }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <PromotedContentStyled className={className}>
      {title && <h3 className="explore__title">{title}</h3>}
      <div className="explore__results">
        {results.map((res: any, idx: number) => {
          return (
            <Card key={idx} type="explore" className="explore__card" {...res} />
          );
        })}
      </div>
    </PromotedContentStyled>
  );
};

export default ExploreMore;
