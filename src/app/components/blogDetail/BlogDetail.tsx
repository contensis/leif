import React from 'react';

import BlogDetailStyled from './BlogDetail.styled';

interface Props {
  className?: string;
  date?: string;
  readTime?: string;
}

const BlogDetail = ({ className, date, readTime }: Props) => {
  if (!date) return null;
  return (
    <BlogDetailStyled className={className}>
      {date && <span className="blog-details__date">{date}</span>}
      {readTime && <span className="blog-details__readtime">{readTime}</span>}
    </BlogDetailStyled>
  );
};

export default BlogDetail;
