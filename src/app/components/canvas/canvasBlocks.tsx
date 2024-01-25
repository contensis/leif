import MarkupBlock from '~/components/canvas/blocks/markup/Markup.block';
import ImageCanvasBlock from '~/components/canvas/blocks/image/Image.block';
import QuoteBlock from '~/components/canvas/blocks/quote/Quote.block';
import PanelBlock from '~/components/canvas/blocks/panel/Panel.block';

export default {
  _paragraph: MarkupBlock,
  _heading: MarkupBlock,
  _image: ImageCanvasBlock,
  _quote: QuoteBlock,
  _panel: PanelBlock,
};
