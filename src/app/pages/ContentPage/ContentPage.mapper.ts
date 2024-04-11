import mapJson from '~/core/util/json-mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { PromotedContentMapper } from '~/components/promotedContent/PromotedContent.mapper';
import { ContentHeroPropsMapping } from '~/components/contentHero/ContentHero.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';

export const ContentPageMappings = {
  meta: PageMetadataPropsMapping,
  hero: ContentHeroPropsMapping,
  banner: BannerPropsMapping,
  promoted: {
    title: 'promotedContentTitle',
    results: ({ promotedContent }: any) => {
      return promotedContent.map((link: any) =>
        mapJson(link, PromotedContentMapper)
      );
    },
  },
  form: { type: 'formPicker.form' },
  canvas: { data: 'canvas' },
};
