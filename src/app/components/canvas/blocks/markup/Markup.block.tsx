import React from 'react';
import MarkupBlockStyled from '~/components/canvas/blocks/markup/Markup.styled';
import { RenderBlockProps } from '@contensis/canvas-react';
import { MarkupBlockProps } from '~/components/canvas/blocks/markup/markup.props';

import VideoBlock from '~/components/canvas/blocks/video/Video.block';
import LinkBlock from '~/components/canvas/blocks/link/Link.block';

const MarkupBlock = (props: RenderBlockProps<MarkupBlockProps>) => {
  const { block } = props;
  let text;
  let containsLink = false;
  if (Array.isArray(block?.value)) {
    text = block.value.map((item, index) => {
      if (item.type === '_link') {
        containsLink = true;
        return <LinkBlock key={index} block={item} />;
      }
      if (item.type === '_inlineEntry') {
        return <VideoBlock key={index} block={item} />;
      }
      return item?.value;
    });
  } else {
    text = block?.value;
  }

  return (
    <MarkupBlockStyled alignment="left">
      {block.type === '_paragraph' ? (
        containsLink || block.properties?.paragraphType !== 'lead' ? (
          text
        ) : (
          <p className="lead-paragraph">{text}</p>
        )
      ) : block.type === '_heading' ? (
        React.createElement(`h${block?.properties?.level}`, {}, text)
      ) : block.type === '_fragment' ? (
        <React.Fragment>{text}</React.Fragment>
      ) : null}
    </MarkupBlockStyled>
  );
};

export default MarkupBlock;
