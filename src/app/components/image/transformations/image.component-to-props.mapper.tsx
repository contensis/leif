import mapJson from '~/core/util/json-mapper';

export const imagePropsMapping = {
  alt: ['altText', 'caption', 'asset.title'],
  id: 'asset.sys.id',
  text: 'caption',
  caption: 'caption',
  path: {
    $path: 'asset.sys.uri',
  },
};

export const mapImageToProps = ({ image }: any) =>
  mapJson(image, imagePropsMapping);
