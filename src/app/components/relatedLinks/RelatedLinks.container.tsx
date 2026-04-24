import React from 'react';
import RelatedLinks, { Props } from './RelatedLinks';

const RelatedLinksContainer = ({ className, title }: Props) => {
  return <RelatedLinks className={className} title={title} />;
};

export default RelatedLinksContainer;
