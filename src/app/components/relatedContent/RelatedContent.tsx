import React from 'react';
import Card from '../card/Card';

import RelatedContentStyled from './RelatedContent.styled';
import LinkButton from '../linkButton/LinkButton';
import { ImageObject } from '../image/Image'

interface LinkObject {
  type: string,
  label: string,
  href: string,
}

interface MappedResObject {
  sys: {
    contentTypeId: string,
  },
  title: string,
  text: string,
  image: ImageObject
  readTime: string,
  date: string,
}

interface ResultsObject  {
  length: number,
  map: Function,
}

interface Props {
  className?: string,
  title?: string,
  results: ResultsObject,
  link?: LinkObject
}

const RelatedContent: React.FC<Props> = ({ className, title, results, link }) => {
  if (!results || results.length < 1) return null;
  return (
    <RelatedContentStyled className={className}>
      {title && <h3 className="related-content__title">{title}</h3>}
      <div className="related-content__results">
        <div className="related-content__results-wrapper">
          {results.map((res: MappedResObject, idx:number) => {
            if (!res) return null;
            const type = res && res.sys && res.sys.contentTypeId;
            return (
              <Card
                key={`${res.title}-${idx}`}
                className="related-content__card"
                type={type}
                title={res.title}
                text={res.text}
                image={res.image}
                readTime={res.readTime}
                date={res.date}
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
            href={link.href}
          />
        )}
      </div>
    </RelatedContentStyled>
  );
};

export default RelatedContent;
