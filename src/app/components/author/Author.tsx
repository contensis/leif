import React from 'react';

import AuthorStyled from './Author.styled';
import Image from '../image/Image';
export interface PersonObject {
  name: string;
  photo: {
    altText?: string;
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

const Author = ({ className, person }: Props) => {
  if (!person) return null;
  const photo = person.photo;

  return (
    <AuthorStyled className={className}>
      <Image image={photo} className="author__photo" />
      <span className="author__person">
        By {person.name}
      </span>
    </AuthorStyled>
  );
};

export default Author;
