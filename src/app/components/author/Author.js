import React from 'react';

import AuthorStyled from './Author.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.person
 */

const Author = ({ className, person }) => {
  if (!person) return null;
  const photo = person.photo;

  return (
    <AuthorStyled className={className}>
      <img
        className="author__photo"
        src={photo.asset.sys.uri}
        alt={photo.altText}
      />
      <span className="author__person">
        By {person.firstName} {person.lastName}
      </span>
    </AuthorStyled>
  );
};

export default Author;
