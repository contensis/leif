import React from 'react';
import mapJson from '../../core/util/json-mapper';
import RelatedLinksStyled from './RelatedLinks.styled';
import { relatedLinksMapper } from './transformations/relatedlinks.entry-to-card.mapper';
import Image from '../image/Image';

export interface Props {
  className?: string;
  title?: string;
  links?: any;
}

interface MappedResultProps {
  title: string;
  path: string;
  imageUri: string;
  imageAlt: string;
}

const RelatedLinks = ({
  className,
  title = 'Related  links',
  links,
}: Props) => {
  if (!links || links.length < 1) return null;

  return (
    <RelatedLinksStyled className={className}>
      {title && <h3 className="related-links__title">{title}</h3>}
      <ul>
        {links.map((link: any, idx: number) => {
          const mappedRes: MappedResultProps = mapJson(
            link,
            relatedLinksMapper
          );
          const { title, path, imageUri, imageAlt } = mappedRes || {};
          return (
            <li key={idx}>
              <a className="related-links__link" href={path}>
                <Image
                  className="related-links__image"
                  path={imageUri}
                  alt={imageAlt}
                  width={74}
                  height={80}
                />
                <span className="related-links__link-title">{title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </RelatedLinksStyled>
  );
};

export default RelatedLinks;
