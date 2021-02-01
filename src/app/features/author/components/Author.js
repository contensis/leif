import React from 'react';
import PropTypes from 'prop-types';

import AuthorStyled from '../components.styled/Author.styled';

const Author = ({ className, person }) => {
  if (!person) return null;
  const photo = person.photo;

  return (
    <AuthorStyled className={className}>
      <img className="aPhoto" src={photo.asset.sys.uri} alt={photo.altText} />
      <span className="aPerson">
        By {person.firstName} {person.lastName}
      </span>
    </AuthorStyled>
  );
};

Author.propTypes = {
  className: PropTypes.string,
  person: PropTypes.object,
};

export default Author;
