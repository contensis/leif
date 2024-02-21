import React from 'react';
import BlogDetail from '~/components/blogDetail/BlogDetail';
import Link from '~/components/link/Link';
import BlogCardStyled from './BlogCard.styled';

export interface Props {
  title: string;
  text: string;
  image: {
    src: string;
    alt?: string;
  };
  date: string;
  readtime?: string;
  path: string;
}

const BlogCard = ({ title, image, text, date, readtime, path }: Props) => {
  if (!path) return null;
  return (
    <BlogCardStyled>
      <Link path={path} className="blog-card__path">
        <h3 className="blog-card__title">{title}</h3>
      </Link>
      {image?.src && (
        <img
          className="blog-card__img"
          src={image.src}
          alt={image?.alt}
          width={360}
          height={360}
          style={{ objectFit: 'cover' }}
        />
      )}
      {text && <p className="blog-card__text">{text}</p>}
      <BlogDetail
        className="blog-card__detail"
        date={date}
        readtime={readtime}
      />
    </BlogCardStyled>
  );
};

export default BlogCard;
