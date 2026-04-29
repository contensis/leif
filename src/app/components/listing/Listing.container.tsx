import React, { ReactElement } from 'react';

import {
  withListing,
  SearchProps,
  ListingProps,
} from '@zengenti/contensis-react-base/search';

import transformations from '../search/transformations';

type ListingContainerProps = {
  children: (props: ListingProps) => React.ReactNode;
};

const ListingContainer = ({
  children,
  ...props
}: React.PropsWithChildren<SearchProps>) => {
  // @ts-ignore
  return (<>{children(props)}</>) as ReactElement<SearchProps>;
};

export default withListing(transformations)(ListingContainer) as React.FC<ListingContainerProps>;
