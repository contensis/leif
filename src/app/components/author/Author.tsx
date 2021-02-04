import React from 'react';

import AuthorStyled from './Author.styled';

interface PersonObject {
  firstName: string;
  lastName: string;
  photo: {
    altText: string;
    asset: {
      sys: {
        uri: string;
      };
    };
  };
}

interface Props {
  className?: string;
  person: PersonObject;
}

export const Author: React.FC<Props> = ({ className, person }) => {
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
