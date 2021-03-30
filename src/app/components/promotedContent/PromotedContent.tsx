import React from 'react';

import Card from '../card/Card';
import PromotedContentStyled from './PromotedContent.styled';
import LinkButton from '../linkButton/LinkButton';

export interface Props {
  className?: string;
  title?: string;
  results: any;
  linkUri?: string;
  linkLabel?: string;
}

const PromotedContent = ({
  className,
  title,
  results,
  linkUri,
  linkLabel,
}: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <PromotedContentStyled className={className}>
      {title && <h3 className="promoted-content__title">{title}</h3>}
      <div className="promoted-content__results">
        {results.map((res: any, idx: number) => {
          return (
            <Card
              key={idx}
              type="explore"
              className="promoted-content__card"
              {...res}
            />
          );
        })}
      </div>
      {linkUri && (
        <LinkButton
          type="secondary"
          isHollow
          className="promoted-content__link"
          label={linkLabel}
          href={linkUri}
        />
      )}
    </PromotedContentStyled>
  );
};

export default PromotedContent;
