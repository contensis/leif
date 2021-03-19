import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';

export interface MappedProps {
  contentHeroProps: GenericHeroProps;
  leadParagraphProps: LeadParagraphProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
