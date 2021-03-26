import { sizesNoUnit } from '../../../theme/global/layout';

export const _createResponsiveSettings = (length: number) => {
  console.info({ length });
  return [
    {
      breakpoint: sizesNoUnit['tablet'],
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: sizesNoUnit['laptop'],
      settings: {
        slidesToShow: length >= 3 ? 2 : 1,
      },
    },
    {
      breakpoint: sizesNoUnit['desktop'],
      settings: {
        slidesToShow: length >= 3 ? 3 : 1,
      },
    },
    {
      breakpoint: sizesNoUnit['mediumDesktop'],
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: sizesNoUnit['largeDesktop'],
      settings: {
        slidesToShow: length >= 2 ? 2 : 1,
      },
    },
    {
      breakpoint: sizesNoUnit['xlargeDesktop'],
      settings: {
        slidesToShow: length >= 3 ? 3 : length === 2 ? 2 : 1,
      },
    },
  ];
};
