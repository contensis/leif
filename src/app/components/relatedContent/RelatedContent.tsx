import React from 'react';
import Card from '../card/Card';

import RelatedContentStyled from './RelatedContent.styled';
import LinkButton from '../linkButton/LinkButton';
import { ImageObject } from '../image/Image';

interface LinkObject {
  type: string;
  label: string;
  uri: string;
}

interface MappedResObject {
  sys: {
    contentTypeId: string;
    version: {
      published: string;
    };
  };
  entryTitle: string;
  entryDescription: string;
  thumbnailImage: ImageObject;
  readTime?: string;
}
export interface Props {
  className?: string;
  title?: string;
  results: any[] | any;
  link?: LinkObject;
}

const RelatedContent = ({ className, title, results, link }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <RelatedContentStyled className={className}>
      {title && <h3 className="related-content__title">{title}</h3>}
      <div className="related-content__results">
        <div className="related-content__results-wrapper">
          {results.map((res: MappedResObject, idx: number) => {
            if (!res) return null;
            const type = res && res.sys && res.sys.contentTypeId;
            return (
              <Card
                key={`${res.entryTitle}-${idx}`}
                className="related-content__card"
                type={type}
                title={res.entryTitle}
                text={res.entryDescription}
                image={res.thumbnailImage}
                readTime={res.readTime}
                date={res.sys.version.published}
              />
            );
          })}
        </div>
        {link && (
          <LinkButton
            type={link.type}
            isHollow
            className="related-content__link"
            label={link.label}
            href={link.uri}
          />
        )}
      </div>
    </RelatedContentStyled>
  );
};

export default RelatedContent;
