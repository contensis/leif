// Types
interface Props {
  textArr: string[];
  imageArr: string[];
}

// Get all the text and images and put them into their own array's.
const _getTextAndImages = (composer: any) => {
  const textArr: string[] = [];
  const imageArr: string[] = [];
  composer.map((item: any) => {
    const { _type, title, text, quote, caption } = item || {};
    switch (_type) {
      case 'markup':
        textArr.push(text);
        break;
      case 'blockQuote':
        textArr.push(quote);
        break;
      case 'image':
        imageArr.push('image');
        textArr.push(caption);
        break;
      case 'featuredProduct':
        textArr.push(title);
        textArr.push(text);
        break;
      default:
        break;
    }
  });
  return { textArr, imageArr };
};

const _getHumanTime = (time: number) => {
  if (time < 0.5) return 'less than a minute';
  if (time >= 0.5 && time < 1.5) return '1 min';
  return `${Math.ceil(time)} min`;
};

const _getImageReadTime = (count: number) => {
  const IMAGE_READ_TIME = 12;
  let seconds = 0;
  if (count > 10) {
    seconds = (count / 2) * (IMAGE_READ_TIME + 3) + (count - 10) * 3;
  } else {
    seconds = (count / 2) * (2 * IMAGE_READ_TIME + (1 - count));
  }
  return seconds / 60;
};

export const _calReadTime = (composer: any) => {
  const WORDS_PER_MIN = 275;

  const TEXT_AND_IMAGES_OBJECT: Props = _getTextAndImages(composer);
  const { textArr, imageArr } = TEXT_AND_IMAGES_OBJECT || [];

  // TODO: can this be moved into its own component?
  if (textArr) {
    let words = 0;
    // Map through text array adding to the total words
    textArr.map((text: string) => {
      return (words += text.trim().split(/\s+/).length);
    });

    let imagesCount = imageArr && imageArr.length;
    const imageTime = _getImageReadTime(imagesCount);

    const wordTime = Math.ceil(words / WORDS_PER_MIN);
    return _getHumanTime(imageTime + wordTime);
  }
};
