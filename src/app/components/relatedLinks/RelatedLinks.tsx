import React from 'react';
import mapJson from '../../core/util/json-mapper';
import RelatedLinksStyled from './RelatedLinks.styled';
import { relatedLinksMapper } from './transformations/relatedlinks.entry-to-card.mapper';
import Image from '../image/Image';
import Link from '../link/Link';

export interface Props {
  className?: string;
  title?: string;
  links?: any;
  nodeChildren?: any;
  nodeSiblings?: any;
  currentNodeId?: string;
  currentNodeParent?: string;
  nodeAncestors?: any;
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
              <Link className="related-links__link" uri={path}>
                <Image
                  className="related-links__image"
                  src={imageUri}
                  alt={imageAlt}
                  width={74}
                  height={80}
                />
                <span className="related-links__link-title">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </RelatedLinksStyled>
  );
};

export default RelatedLinks;
