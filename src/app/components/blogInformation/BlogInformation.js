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
      <div className="biAuthor">
        <Author person={person} />
        <SocialShare className="biSocials" />
      </div>
      <div className="biInfo">
        {date && <span className="biDate">{dateWithSuffix(date)}</span>}
        {readTime && <span className="biReadTime">{readTime} min read</span>}
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
