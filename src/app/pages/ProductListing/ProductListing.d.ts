import { Props as MetadataProps } from '~/components/metadata/Metadata';
export interface MappedProps {
  title: string;
  metadataProps: MetadataProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
