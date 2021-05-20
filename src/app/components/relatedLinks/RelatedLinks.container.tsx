import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { selectCurrentNodeChildren } from '../../core/redux/custom/routing/selectors';

import RelatedLinks, { Props } from './RelatedLinks';

const RelatedLinksContainer = ({ className, title, links }: Props) => {
  return <RelatedLinks className={className} title={title} links={links} />;
};

const mapStateToProps = (state: any) => {
  return {
    links: selectCurrentNodeChildren(state),
  };
};

export default connect(mapStateToProps, null)(toJS(RelatedLinksContainer));
