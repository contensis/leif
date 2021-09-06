import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
} from 'react';

import {
  withListing,
  SearchProps,
} from '@zengenti/contensis-react-base/search';

import transformations from '../search/transformations';

const ListingContainer = (props: React.PropsWithChildren<SearchProps>) => {
  return (
    <>
      {Children.map<ReactNode, ReactNode>(props.children, child => {
        if (isValidElement(child))
          return cloneElement<SearchProps>(child, {
            ...props,
            ...child.props,
          }) as ReactElement<SearchProps>;
        return null;
      })}
    </>
  ) as ReactElement<SearchProps>;
};

export default withListing(transformations)(ListingContainer);
