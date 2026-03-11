import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as PlantCategoryGridProps } from '~/components/plantCategoryGrid/PlantCategoryGrid.d';

export interface MappedProps {
  meta: MetadataProps;
  hero: LandingHeroProps;
  composer: ComposerProps;
  banner: CTABannerProps;
  plantCategories: PlantCategoryGridProps;
}

export type Props = RouteComponentProps<MappedProps>;
