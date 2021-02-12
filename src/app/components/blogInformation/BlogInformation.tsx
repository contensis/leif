import React from 'react';

import BlogInformationStyled from './BlogInformation.styled';
import { Author, PersonObject } from '../author/Author';
import SocialShare from '../socialShare/SocialShare';
import dateWithSuffix from '../../utils/dateWithSuffix'

interface Props {
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
        {date && (
          <span className="blog-info__date">{dateWithSuffix(date)}</span>
        )}
        {readTime && (
          <span className="blog-info__readtime">{readTime} min read</span>
        )}
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
