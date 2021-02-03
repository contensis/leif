import React from 'react';

import BlogInformationStyled from '../components.styled/BlogInformation.styled';

import Author from '../../author';
import SocialShare from '../../socialShare';
import formatDate from '~/utils/formatDate';
import dateSuffix from '~/utils/dateSuffix';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.person
 * @param {number} props.readTime
 * @param {string} props.date
 */

const BlogInformation = ({ className, person, readTime, date }) => {
  const dateDay = formatDate(date, 'd');
  const dateMonth = formatDate(date, 'MMM');
  return (
    <BlogInformationStyled className={className}>
      <div className="biAuthor">
        <Author person={person} />
        <SocialShare className="biSocials" />
      </div>
      <div className="biInfo">
        {date && (
          <span className="biDate">
            {dateSuffix(dateDay)} {dateMonth}
          </span>
        )}
        {readTime && <span className="biReadTime">{readTime} min read</span>}
      </div>
    </BlogInformationStyled>
  );
};

export default BlogInformation;
