import React from 'react';

import { withListing } from '@zengenti/contensis-react-base/search';

import transformations from '../search/transformations';

const ListingContainer = (props: any) => {
  return (
    <>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          ...props,
          ...child.props,
        })
      )}
    </>
  );
};

export default withListing(transformations)(ListingContainer);
