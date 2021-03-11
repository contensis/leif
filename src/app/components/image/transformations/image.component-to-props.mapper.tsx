import mapJson from '../../../core/util/json-mapper';

export const imagePropsMapping = {
  alt: ['altText', 'caption', 'asset.title'],
  caption: 'caption',
  id: 'asset.sys.id',
  path: {
    $path: 'asset.sys.uri',
  },
};

export const mapImageToProps = ({ image }: any) =>
  mapJson(image, imagePropsMapping);
