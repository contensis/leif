import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';

export interface MappedProps {
  landingPageHeroProps: GenericHeroProps | ContentHeroProps | LandingHeroProps;
  leadParagraphProps: LeadParagraphProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
