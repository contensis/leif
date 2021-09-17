type Props = {
  altText: string;
  caption: string;
  asset: {
    altText: string;
    title: string;
  };
};

export default function (src: Props) {
  let alt;
  if (src.altText) {
    alt = src.altText;
  } else if (src.caption) {
    alt = src.caption;
  } else if (src.asset.altText) {
    alt = src.asset.altText;
  } else if (src.asset.title) {
    alt = src.asset.title;
  }
  return alt;
}
