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
      <Image
        src={photo}
        alt={`Photo of ${name}`}
        className="author__photo"
        width={40}
        height={40}
      />
      <span className="author__person">By {name}</span>
    </AuthorStyled>
  );
};

export default Author;
