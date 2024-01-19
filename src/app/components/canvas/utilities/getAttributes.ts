import {
  Block,
  RenderBlockProps,
  RenderBlockPropsWithChildren,
  RenderDecoratorProps,
} from '@contensis/canvas-react';

type AttributeProps =
  | RenderBlockProps<Block>
  | RenderBlockPropsWithChildren<Block>
  | RenderDecoratorProps
  | RenderBlockPropsWithChildren<any>;

export default (props: AttributeProps, extra: Record<string, any> = {}) => {
  const { block, ...rest } = props;
  const { ...attributes } = rest as Record<string, any>;
  return {
    id: block?.properties?.id,
    ...extra,
    ...attributes,
  };
};
