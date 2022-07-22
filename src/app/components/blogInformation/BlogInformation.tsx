import React from 'react';

import Author from '../author/Author';

import BlogInformationStyled from './BlogInformation.styled';
import SocialShare from '../socialShare/SocialShare';
import BlogDetail from '../blogDetail/BlogDetail';
export interface Props {
  className?: string;
  readTime: string;
  date: string;
  photo: string;
  name: string;
}

const BlogInformation = ({ className, readTime, date, photo, name }: Props) => {
  return (
    <BlogInformationStyled className={className}>
      <div className="blog-info__author">
        <Author photo={photo} name={name} />
        <SocialShare className="blog-info__socials" />
      </div>
      <div className="blog-info__wrapper">
        <BlogDetail date={date} readTime={readTime} />
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
