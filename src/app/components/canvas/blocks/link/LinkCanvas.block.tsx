import React from 'react';
import {
  Link,
  RenderBlockPropsWithChildren,
  LinkBlock as LinkBlockProps,
} from '@contensis/canvas-react';
import getAttributes from '~/components/canvas/utilities/getAttributes';
import { PageLinkStyled } from '~/components/canvas/blocks/link/LinkCanvas.styled';
import ContentRenderer from '~/components/canvas/blocks/link/ContentRenderer';

const LinkBlock = ({
  block,
  children,
}: RenderBlockPropsWithChildren<LinkBlockProps>) => {
  const { link, newTab } = block?.properties || {};
  const href = link?.sys?.uri;
  const target = newTab ? '_blank' : null;
  const rel = newTab ? 'noopener noreferrer' : null;
  const attributes = getAttributes({ block, children }, { href, target, rel });

  if (!href) {
    return (
      <ContentRenderer
        contents={children}
        fallback={<Link.Children block={block} />}
      />
    );
  }

  const isExternal = newTab || !link?.sys?.contentTypeId;

  return isExternal ? (
    <a {...attributes}>
      <ContentRenderer
        contents={children}
        fallback={<Link.Children block={block} />}
      />
    </a>
  ) : (
    <PageLinkStyled {...attributes} to={href}>
      <ContentRenderer
        contents={children}
        fallback={<Link.Children block={block} />}
      />
    </PageLinkStyled>
  );
};

export default LinkBlock;
