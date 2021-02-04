import React from 'react';
import PropTypes from 'prop-types';

import VisuallyHiddenStyled from './VisuallyHidden.styled';

interface Props {
  text?: string,
  children?: any,
}

const VisuallyHidden: React.FC <Props> = ({ text, children }) => {
  return (
    <VisuallyHiddenStyled>
      {text}
      {children}
    </VisuallyHiddenStyled>
  );
};

VisuallyHidden.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export default VisuallyHidden;
