import React from 'react';

import Card from '../card/Card';
import PromotedContentStyled from './PromotedContent.styled';
import LinkButton from '../linkButton/LinkButton';
import { CardTypes } from '~/core/schema';

export interface Props {
  className?: string;
  title?: string;
  results?: any;
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
      {title && <h2 className="promoted-content__title">{title}</h2>}
      <div className="promoted-content__results">
        {results.map((res: any, i: number) => {
          return (
            <Card
              {...res}
              key={i}
              className="promoted-content__card"
              type={CardTypes.Explore}
            />
          );
        })}
      </div>
      {linkUri && (
        <LinkButton
          theme="martinique"
          variant="secondary"
          className="promoted-content__link"
          label={linkLabel}
          path={linkUri}
        />
      )}
    </PromotedContentStyled>
  );
};

export default PromotedContent;
