import React from 'react';

import AuthorStyled from './Author.styled';
import Image from '../image/Image';
interface Props {
  className?: string;
  photo: string;
  name: string;
}

const Author = ({ className, name, photo }: Props) => {
  if (!photo || !name) return null;

  return (
    <AuthorStyled className={className}>
      <Image path={photo} alt={name} className="author__photo" />
      <span className="author__person">By {name}</span>
    </AuthorStyled>
  );
};

export default Author;
