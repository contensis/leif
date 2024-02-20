import React from 'react';
import BlogDetailStyled from './BlogDetail.styled';

interface Props {
  className?: string;
  date: string;
  readtime?: string;
}

const BlogDetail = ({ className, date, readtime }: Props) => {
  if (!date) return null;
  return (
    <BlogDetailStyled className={className}>
      <span className="blog-details__date">{date}</span>
      {readtime && <span className="blog-details__readtime">{readtime}</span>}
    </BlogDetailStyled>
  );
};

export default BlogDetail;
