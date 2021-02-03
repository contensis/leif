import React from 'react';
import PropTypes from 'prop-types';

import VisuallyHiddenStyled from './VisuallyHidden.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.text
 * @param {any} props.children
 */

const VisuallyHidden = ({ text, children }) => {
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
