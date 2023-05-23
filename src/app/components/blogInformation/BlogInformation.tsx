import React from 'react';

import Author from '../author/Author';

import BlogInformationStyled from './BlogInformation.styled';
import SocialShare from '../socialShare/SocialShare';
import BlogDetail from '../blogDetail/BlogDetail';
export interface Props {
  className?: string;
  readTime?: string;
  author?: {
    photo: string;
    name: string;
  };
  date?: string;
}

const BlogInformation = ({ className, readTime, date, author }: Props) => {
  return (
    <BlogInformationStyled className={className}>
      <div className="blog-info__author">
        {author && <Author photo={author.photo} name={author.name} />}
        <SocialShare className="blog-info__socials" />
      </div>
      <div className="blog-info__wrapper">
        <BlogDetail date={date} readTime={readTime} />
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
