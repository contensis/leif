const cropImage = (
  originalSrc: string,
  width?: number,
  height?: number,
  crop = true
): string => {
  let src = originalSrc;

  if (src.indexOf('picsum.photos') > -1) return src;

  if (width || height) {
    src += src.includes('?') ? '&' : '?';

    if (width) {
      src += 'width=' + width;
    }

    if (height) {
      if (width) {
        src += '&';
      }
      src += 'height=' + height;
    }

    if (crop && width && height) {
      src += '&fit=crop';
    }

    src += '&format=webp';
  }

  return src;
};

export default cropImage;
