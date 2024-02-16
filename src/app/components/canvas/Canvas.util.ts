// Blocks
import ImageCanvasBlock from '~/components/canvas/blocks/ImageCanvas.block';
import QuoteBlock from '~/components/canvas/blocks/QuoteCanvas.block';
import PanelBlock from '~/components/canvas/blocks/PanelCanvas.block';
import VideoBlock from '~/components/canvas/blocks/VideoCanvas.block';
import TableBlock from '~/components/canvas/blocks/TableCanvas.block';

// Components
import FeaturedProductCanvas from '~/components/featuredProduct/FeaturedProduct.canvas';
import FeatureRowCanvas from '~/components/cardRow/CardRow.canvas';

export const blocks = {
  _image: ImageCanvasBlock,
  _quote: QuoteBlock,
  _panel: PanelBlock,
  _video: VideoBlock,
  _table: TableBlock,
};

export const components = {
  featuredProduct: FeaturedProductCanvas,
  cardRow: FeatureRowCanvas,
};
