import React from 'react';

import BlogInformationStyled from './BlogInformation.styled';
import Author from '../author/Author';
import SocialShare from '../socialShare/SocialShare';

import dateWithSuffix from '~/utils/dateWithSuffix';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.person
 * @param {number} props.readTime
 * @param {string} props.date
 */

const BlogInformation = ({ className, person, readTime, date }) => {
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
