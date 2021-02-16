import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/link/Link';

const Homepage = ({ entry }) => (
  <>
    <h1>Hello world {entry && entry.entryTitle}</h1>
    <Link uri="/zenInfo">ZenInfo</Link>
  </>
);

Homepage.propTypes = {
  entry: PropTypes.object,
};

export default Homepage;
