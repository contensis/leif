import { renderHeroPropsMapper } from '~/components/renderHero/transformations/renderhero.components-to-props.mapper';

export const landingPagePropsMapping = {
  landingPageHeroProps: { ...renderHeroPropsMapper },
  leadParagraphProps: {
    text: 'leadParagraph',
    type: {
      $path: 'type',
      $default: 'center',
    },
  },
};
