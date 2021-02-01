import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExtSvg = styled(({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      title="(opens new window)"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="square"
      strokeLinejoin="arcs"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
      </g>
    </svg>
  );
})`
  ${({ theme: { swatch } }) => `
    position: relative;
    top: 2px;
    margin-left: 4px;
    stroke: ${swatch.link.initial};
    stroke-width: 2px;
  `};
`;

ExtSvg.propTypes = {
  className: PropTypes.string,
};

ExtSvg.defaultProps = {};

export default ExtSvg;
