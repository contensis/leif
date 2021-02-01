import React from 'react';
import PropTypes from 'prop-types';

import BlogInformationStyled from '../components.styled/BlogInformation.styled';

import Author from '../../author';
import SocialShare from '../../socialShare';
import formatDate from '~/utils/formatDate';

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

BlogInformation.propTypes = {
  className: PropTypes.string,
  person: PropTypes.object,
  readTime: PropTypes.number,
  date: PropTypes.string,
};

export default BlogInformation;
