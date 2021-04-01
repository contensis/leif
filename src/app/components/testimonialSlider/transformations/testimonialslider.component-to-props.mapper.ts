import mapJson from '~/core/util/json-mapper';

const testimonialPropsMapping = {
  quote: 'text',
  name: 'person.name',
  photo: {
    $path: 'person.photo',
    $formatting: (photo: any) =>
      photo.asset && photo.asset.sys && photo.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
};

export const featuredReviewsPropsMapping = {
  testimonials: {
    $path: '.',
    $formatting: (testimonial: any) =>
      mapJson(testimonial, testimonialPropsMapping),
  },
};
