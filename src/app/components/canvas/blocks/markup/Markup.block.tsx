import React from 'react';
import MarkupBlockStyled from './Markup.styled';
import {
  ParagraphBlock as ParagraphBlockProps,
  HeadingBlock as HeadingBlockProps,
  InlineEntryBlock as InlineEntryblockProps,
  FragmentBlock as FragmentBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';

import VideoBlock from '~/components/canvas/blocks/video/Video.block';
import LinkBlock from '~/components/canvas/blocks/link/link.block';

type MarkupBlockProps =
  | ParagraphBlockProps
  | HeadingBlockProps
  | InlineEntryblockProps
  | FragmentBlockProps;

const MarkupBlock = (props: RenderBlockProps<MarkupBlockProps>) => {
  let text;
  let containsLink = false;
  if (Array.isArray(props?.block?.value)) {
    text = props.block.value.map((item, index) => {
      if (item.type === '_link') {
        containsLink = true;
        return <LinkBlock key={index} block={item} />;
      }
      if (item.type === '_inlineEntry') {
        return <VideoBlock key={index} block={item} />; // Use VideoBlock for _inlineEntry
      }
      return item?.value;
    });
  } else {
    text = props?.block?.value;
  }

  return (
    <MarkupBlockStyled alignment="left">
      {props.block.type === '_paragraph' ? (
        containsLink || props.block.properties?.paragraphType !== 'lead' ? (
          text
        ) : (
          <p className="lead-paragraph">{text}</p>
        )
      ) : props.block.type === '_heading' ? (
        React.createElement(`h${props?.block?.properties?.level}`, {}, text)
      ) : props.block.type === '_fragment' ? (
        <React.Fragment>{text}</React.Fragment>
      ) : null}
    </MarkupBlockStyled>
  );
};

export default MarkupBlock;
