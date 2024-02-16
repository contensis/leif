import mapJson from '~/core/util/json-mapper';

const TestimonialPropsMapping = {
  quote: 'text',
  name: 'person.name',
  photo: {
    $path: 'person.photo',
    $formatting: (photo: any) =>
      photo.asset && photo.asset.sys && photo.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
};

export const FeaturedReviewsPropsMapping = {
  testimonials: {
    $path: '.',
    $formatting: (testimonial: any) =>
      mapJson(testimonial, TestimonialPropsMapping),
  },
};
