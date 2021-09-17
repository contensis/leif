import { Image } from '~/_types/contensis';

export default function (image: Image) {
  if (image === null) {
    return '';
  }
  if (typeof image === 'object' && image.asset) {
    // the typeof 'null' is object  https://stackoverflow.com/questions/18808226/why-is-typeof-null-object
    return image.asset.sys.uri;
  } else {
    console.info('malformed image object', image);
    return '';
  }
}
