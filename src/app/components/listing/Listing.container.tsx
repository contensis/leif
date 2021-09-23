import React from 'react';

import {
  withListing,
  SearchProps,
} from '@zengenti/contensis-react-base/search';

import transformations from '../search/transformations';

const ListingContainer = ({
  children,
  ...props
}: React.PropsWithChildren<SearchProps>) => {
  // @ts-ignore
  return (<>{children(props)}</>) as ReactElement<SearchProps>;
};

export default withListing(transformations)(ListingContainer);
