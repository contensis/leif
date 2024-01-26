// Blocks
import ImageCanvasBlock from '~/components/canvas/blocks/image/ImageCanvas.block';
import QuoteBlock from '~/components/canvas/blocks/quote/QuoteCanvas.block';
import PanelBlock from '~/components/canvas/blocks/panel/PanelCanvas.block';
import VideoBlock from '~/components/canvas/blocks/video/VideoCanvas.block';

// Components
import FeaturedProductCanvas from '~/components/canvas/components/featuredProduct/FeaturedProductCanvas';
import FeatureRowCanvas from '~/components/canvas/components/featuredRow/FeaturedRowCanvas';

export const blocks = {
  _image: ImageCanvasBlock,
  _quote: QuoteBlock,
  _panel: PanelBlock,
  _video: VideoBlock,
};

export const components = {
  featuredProduct: FeaturedProductCanvas,
  cardRow: FeatureRowCanvas,
};
