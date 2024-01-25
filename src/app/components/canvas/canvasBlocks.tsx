import MarkupBlock from '~/components/canvas/blocks/markup/MarkupCanvas.block';
import ImageCanvasBlock from '~/components/canvas/blocks/image/ImageCanvas.block';
import QuoteBlock from '~/components/canvas/blocks/quote/QuoteCanvas.block';
import PanelBlock from '~/components/canvas/blocks/panel/PanelCanvas.block';

export default {
  _paragraph: MarkupBlock,
  _heading: MarkupBlock,
  _image: ImageCanvasBlock,
  _quote: QuoteBlock,
  _panel: PanelBlock,
};
