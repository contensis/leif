import React, { AnchorHTMLAttributes } from 'react';
import {
  RenderBlockPropsWithChildren,
  LinkBlock as LinkBlockProps,
  Link,
} from '@contensis/canvas-react';
import getAttributes from '~/components/canvas/utilities/getAttributes';
import { PageLinkStyled } from './Link.styled';

const LinkBlock = (props: RenderBlockPropsWithChildren<LinkBlockProps>) => {
  const linkValue = props?.block?.properties?.link;
  const attributes: AnchorHTMLAttributes<HTMLAnchorElement> = getAttributes(
    props,
    {
      href: linkValue?.sys?.uri,
      target: props?.block?.properties?.newTab ? '_blank' : null,
      rel: props?.block?.properties?.newTab ? 'noopener noreferrer' : null,
    }
  );

  if (attributes.href) {
    if (
      props?.block?.properties?.newTab || // if open in new tab
      !props?.block?.properties?.link?.sys?.contentTypeId // if not an entry link
    ) {
      return (
        <a {...attributes}>
          <RenderContents
            contents={props.children}
            fallback={<Link.Children block={props.block} />}
          />
        </a>
      );
    } else {
      return (
        <PageLinkStyled {...getAttributes(props)} to={attributes.href}>
          <RenderContents
            contents={props.children}
            fallback={<Link.Children block={props.block} />}
          />
        </PageLinkStyled>
      );
    }
  } else {
    return (
      <RenderContents
        contents={props.children}
        fallback={<Link.Children block={props.block} />}
      />
    );
  }
};

const RenderContents = (props: {
  contents?: React.ReactElement;
  fallback: React.ReactElement;
}) => {
  return props.contents ? props.contents : props.fallback;
};

export default LinkBlock;
