import React from 'react';

import BlogInformationStyled from '../components.styled/BlogInformation.styled';

import Author from '../../author';
import SocialShare from '../../socialShare';
import formatDate from '~/utils/formatDate';

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
        <span className="biDate">{formatDate(date, 'dd MMM')}</span>
        <span className="biReadTime">{readTime} min read</span>
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
