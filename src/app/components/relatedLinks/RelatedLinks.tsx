import React from 'react';
import RelatedLinksStyled from './RelatedLinks.styled';
import { useSelector } from 'react-redux';
import { routing } from '@zengenti/contensis-react-base/redux';
import Link from '../link/Link';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { RelatedLinksMapping } from './RelatedLinks.mapper';

export interface Props {
  className?: string;
  title?: string;
}

interface LinkProps {
  path: string;
  displayName: string;
}

interface MappedLinkProps {
  path: string;
  displayName: string;
  image: {
    src: string;
    alt?: string;
  };
}

const RelatedLinks = ({ className, title = 'Related  links' }: Props) => {
  const siblings = useSelector(routing.selectors.selectCurrentSiblings);
  const ancestors = useSelector(routing.selectors.selectCurrentAncestors);
  const parent = useSelector(routing.selectors.selectCurrentNode)?.parentId;
  const nodeid = useSelector(routing.selectors.selectCurrentNode)?.id;

  const links = [
    ...siblings.filter((node: any) => node.id === parent),
    ...ancestors.filter((node: any) => node.id !== nodeid),
  ] as LinkProps[];

  if (!links || links.length < 1) return null;
  return (
    <RelatedLinksStyled className={className}>
      <h3>{title}</h3>
      <ol>
        {links.map((link: LinkProps, i: number) => {
          const mapped = mapJson(link, RelatedLinksMapping) as MappedLinkProps;
          return (
            <li key={i}>
              {mapped.image.src && (
                <img
                  width={80}
                  height={80}
                  loading="lazy"
                  src={mapped.image.src}
                  alt={mapped.image?.alt || ''}
                />
              )}
              <Link uri={mapped.path}>{mapped.displayName}</Link>
            </li>
          );
        })}
      </ol>
    </RelatedLinksStyled>
  );
};

export default RelatedLinks;
