// Blocks
import ImageCanvasBlock from '~/components/canvas/blocks/ImageCanvas.block';
import QuoteBlock from '~/components/canvas/blocks/QuoteCanvas.block';
import PanelBlock from '~/components/canvas/blocks/PanelCanvas.block';
import TableBlock from '~/components/canvas/blocks/TableCanvas.block';
import InlineEntryBlock from '~/components/canvas/blocks/InlineEntryCanvas.block';

// Components
import FeaturedProductCanvas from '~/components/featuredProduct/FeaturedProduct.canvas';
import FeatureRowCanvas from '~/components/cardRow/CardRow.canvas';
import AccordionCanvas from '~/components/accordion/Accordion.canvas';
import ParagraphBlock from '~/components/canvas/blocks/ParagraphCanvas.block';

export const blocks = {
  _paragraph: ParagraphBlock,
  _image: ImageCanvasBlock,
  _quote: QuoteBlock,
  _panel: PanelBlock,
  _table: TableBlock,
  _inlineEntry: InlineEntryBlock,
};

export const components = {
  featuredProduct: FeaturedProductCanvas,
  cardRow: FeatureRowCanvas,
  accordionGroup: AccordionCanvas,
};
