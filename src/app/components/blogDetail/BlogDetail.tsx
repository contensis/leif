import React from 'react';

import BlogDetailStyled from './BlogDetail.styled';
import dateWithSuffix from '../../utils/dateWithSuffix';

interface Props {
  className?: string;
  date?: string;
  readTime?: string;
}

const BlogDetail = ({ className, date, readTime }: Props) => {
  if (!date && !readTime) return null;
  return (
    <BlogDetailStyled className={className}>
      {date && (
        <span className="blog-details__date">{dateWithSuffix(date)}</span>
      )}
      {readTime && (
        <span className="blog-details__readtime">{readTime} min read</span>
      )}
    </BlogDetailStyled>
  );
};

export default BlogDetail;
