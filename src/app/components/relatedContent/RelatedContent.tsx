import React from 'react';
import Card from '../card/Card';

import RelatedContentStyled from './RelatedContent.styled';
import LinkButton from '../linkButton/LinkButton';
export interface Props {
  className?: string;
  title?: string;
  results?: any[];
  linkUri?: string;
  linkLabel?: string;
  linkType?: string;
}

const RelatedContent = ({
  className,
  title,
  results,
  linkUri,
  linkLabel,
  linkType = 'secondary',
}: Props) => {
  if (!results || results.length < 1 || (results && results[0] === undefined))
    return null;
  return (
    <RelatedContentStyled className={className}>
      {title && <h3 className="related-content__title">{title}</h3>}
      <div className="related-content__results">
        <div className="related-content__results-wrapper">
          {results.map((res: any, idx: number) => {
            if (!res) return null;
            const type = res && res.sys && res.sys.contentTypeId;
            return (
              <Card
                key={`${res.entryTitle}-${idx}`}
                className="related-content__card"
                type={type}
                {...res}
              />
            );
          })}
        </div>
        {linkUri && (
          <LinkButton
            type={linkType}
            isHollow
            className="related-content__link"
            label={linkLabel}
            href={linkUri}
          />
        )}
      </div>
    </RelatedContentStyled>
  );
};

export default RelatedContent;
