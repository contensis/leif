import {
  ParagraphBlock as ParagraphBlockProps,
  HeadingBlock as HeadingBlockProps,
  InlineEntryBlock as InlineEntryblockProps,
  FragmentBlock as FragmentBlockProps,
} from '@contensis/canvas-react';

export type MarkupBlockProps =
  | ParagraphBlockProps
  | HeadingBlockProps
  | InlineEntryblockProps
  | FragmentBlockProps;
