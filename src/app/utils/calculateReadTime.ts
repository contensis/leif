// Types
interface Props {
  textArr: string[];
  imageArr: string[];
}

// Dictionary of all the fields id's from the composer.
const FIELDS_DICTIONARY = {
  markup: 'markup',
  blockQuote: 'blockQuote',
  image: 'image',
  featuredProduct: 'featuredProduct+',
};

// Get all the text and images and put them into their own array's.
const _getTextAndImages = (composer: any) => {
  const textArr: string[] = [];
  const imageArr: string[] = [];
  composer.map((item: any) => {
    const { _type, title, text, quote, caption } = item || {};
    switch (_type) {
      case FIELDS_DICTIONARY.markup:
        textArr.push(text);
        break;
      case FIELDS_DICTIONARY.blockQuote:
        textArr.push(quote);
        break;
      case FIELDS_DICTIONARY.image:
        imageArr.push('image');
        textArr.push(caption);
        break;
      case FIELDS_DICTIONARY.featuredProduct:
        textArr.push(title);
        textArr.push(text);
        break;
      default:
        break;
    }
  });
  return { textArr, imageArr };
};

// Format the time into a human readable format
const _getHumanTime = (time: number) => {
  if (time < 0.5) return 'less than a minute';
  if (time >= 0.5 && time < 1.5) return '1 min';
  return `${Math.ceil(time)} min`;
};

// Calculates the image read time
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

// Calculates the words read time
const _getWordReadTime = (textArr: string[]) => {
  if (!textArr || textArr.length < 1) return 0;
  const WORDS_PER_MIN = 275;
  let words = 0;
  textArr.map((text: string) => {
    return (words += text.trim().split(/\s+/).length);
  });

  const wordTime: number = Math.ceil(words / WORDS_PER_MIN);
  return wordTime;
};

// Calculates the overall read time combing both words and images
export const _calReadTime = (composer: any) => {
  const TEXT_AND_IMAGES_OBJECT: Props = _getTextAndImages(composer);
  const { textArr, imageArr } = TEXT_AND_IMAGES_OBJECT || [];

  if (textArr) {
    const imagesCount = imageArr && imageArr.length;
    const imageTime = _getImageReadTime(imagesCount);
    const wordTime = _getWordReadTime(textArr);

    return _getHumanTime(imageTime + wordTime);
  }
};
