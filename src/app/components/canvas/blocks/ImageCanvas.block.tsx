import React from 'react';
import {
  ImageBlock as ImageBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { ImageCanvasMappings } from '~/components/imageBlock/ImageBlock.mapper';
import ImageBlock, {
  Props as ImageProps,
} from '~/components/imageBlock/ImageBlock';

const ImageCanvasBlock = (props: RenderBlockProps<ImageBlockProps>) => {
  return (
    <ImageBlock {...(mapJson(props, ImageCanvasMappings) as ImageProps)} />
  );
};

export default ImageCanvasBlock;
