import React from 'react';

import BlogInformationStyled from './BlogInformation.styled';
import Author, { PersonObject } from '../author/Author';
import SocialShare from '../socialShare/SocialShare';
import BlogDetail from '../blogDetail/BlogDetail';
export interface Props {
  className?: string;
  person: PersonObject;
  readTime: string;
  date: string;
}

const BlogInformation = ({ className, person, readTime, date }: Props) => {
  return (
    <BlogInformationStyled className={className}>
      <div className="blog-info__author">
        <Author person={person} />
        <SocialShare className="blog-info__socials" />
      </div>
      <div className="blog-info__wrapper">
        <BlogDetail date={date} readTime={readTime} />
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
