import React from 'react';

import AuthorStyled from './Author.styled';
import Image from '../image/Image';
interface Props {
  className?: string;
  photo?: string;
  name: string;
}

const Author = ({ className, name, photo }: Props) => {
  if (!name) return null;

  return (
    <AuthorStyled className={className}>
      {photo && (
        <Image
          src={photo}
          alt={`Photo of ${name}`}
          className="author__photo"
          width={40}
          height={40}
        />
      )}
      <span className="author__name">By {name}</span>
    </AuthorStyled>
  );
};

export default Author;
