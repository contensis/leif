import React from 'react';
import { connect } from 'react-redux';

// Selectors
import {
  selectCurrentNodeChildren,
  selectCurrentNodeSiblings,
  selectCurrentNodeId,
  selectCurrentNodeParentId,
  selectCurrentNodeAncestors,
} from '~/redux/routing/selectors';

// Component and Props
import RelatedLinks, { Props } from './RelatedLinks';

const RelatedLinksContainer = ({
  className,
  title,
  nodeChildren,
  nodeSiblings,
  currentNodeId,
  currentNodeParent,
  nodeAncestors,
}: Props) => {
  let links = [];

  const hasChildren = nodeChildren && nodeChildren.length >= 1;
  if (!hasChildren) {
    links = [
      ...nodeAncestors.filter((node: any) => node.id === currentNodeParent),
      ...nodeSiblings.filter((node: any) => node.id !== currentNodeId),
    ];
  } else {
    links = nodeChildren;
  }

  return <RelatedLinks className={className} title={title} links={links} />;
};

const mapStateToProps = (state: any) => {
  return {
    nodeChildren: selectCurrentNodeChildren(state),
    nodeSiblings: selectCurrentNodeSiblings(state),
    currentNodeId: selectCurrentNodeId(state),
    currentNodeParent: selectCurrentNodeParentId(state),
    nodeAncestors: selectCurrentNodeAncestors(state),
  };
};

export default connect(mapStateToProps, null)(RelatedLinksContainer);
