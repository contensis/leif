// Mappers
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { BlogListingHeroMapping } from '~/components/genericHero/GenericHero.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';

export const BlogListingPropsMapping = {
  meta: PageMetadataPropsMapping,
  title: 'entryTitle',
  featured: BlogListingHeroMapping,
  banner: BannerPropsMapping,
};
