import React from 'react';
import {
  Link as LinkCanvas,
  RenderBlockPropsWithChildren,
  LinkBlock as LinkBlockProps,
} from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import Link from '~/components/link/Link';
import { LinkCanvasMappings } from '~/components/link/Link.mapper';

const LinkBlock = (props: RenderBlockPropsWithChildren<LinkBlockProps>) => {
  return (
    <Link {...mapJson(props, LinkCanvasMappings)}>
      <LinkCanvas.Children block={props.block} />
    </Link>
  );
};

export default LinkBlock;
