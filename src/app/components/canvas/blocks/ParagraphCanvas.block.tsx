import React from 'react';
import {
  Paragraph as ParagraphCanvas,
  RenderBlockPropsWithChildren,
  ParagraphBlock as ParagraphBlockProps,
  InlineEntryBlock as InlineEntryBlockProps,
} from '@contensis/canvas-react';

interface CustomBlockProps extends ParagraphBlockProps {
  value: InlineEntryBlockProps[];
}

const ParagraphBlock = (
  props: RenderBlockPropsWithChildren<ParagraphBlockProps>
) => {
  const { hasWrapper } = useWrapper(props.block as CustomBlockProps);
  if (!hasWrapper) return <ParagraphCanvas.Children block={props.block} />;
  return <ParagraphCanvas block={props.block} />;
};

export default ParagraphBlock;

const useWrapper = (block: CustomBlockProps) => {
  const [hasWrapper, setWrapper] = React.useState(true);
  React.useEffect(() => {
    if (block?.value?.length >= 1) {
      for (const value of block.value) {
        if (value?.type === '_inlineEntry') {
          console.info(' hit me?');
          setWrapper(false);
        }
      }
    }
  }, [block]);

  return { hasWrapper };
};
