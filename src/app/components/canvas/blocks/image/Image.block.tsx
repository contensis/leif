import React from 'react';
import {
  FigureStyled,
  ImageStyled,
  CaptionStyled,
} from '~/components/canvas/blocks/image/Image.styled';
import {
  ImageBlock as ImageBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';

const ImageCanvasBlock = (props: RenderBlockProps<ImageBlockProps>) => {
  const { uri, properties: { width = undefined, height = undefined } = {} } =
    props?.block?.value?.asset?.sys || {};
  const altText = props?.block?.value?.altText;
  const caption = props?.block?.value?.caption;

  return (
    <FigureStyled>
      <ImageStyled
        src={uri}
        alt={altText}
        loading="lazy"
        width={width}
        height={height}
      />
      {caption && <CaptionStyled>{caption}</CaptionStyled>}
    </FigureStyled>
  );
};

export default ImageCanvasBlock;
