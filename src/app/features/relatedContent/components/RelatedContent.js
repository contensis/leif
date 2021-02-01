import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../card';

import RelatedContentStyled from '../components.styled/RelatedContent.styled';
import { LinkButton } from '../../button';

const RelatedContent = ({ className, title, results, link }) => {
  if (!results || results.length < 1) return null;
  return (
    <RelatedContentStyled className={className}>
      {title && <h3 className="rcTitle">{title}</h3>}
      <div className="rcResults">
        {results.map((res, idx) => {
          if (!res) return null;
          const type = res && res.sys && res.sys.contentTypeId;
          return (
            <Card
              key={`${res.title}-${idx}`}
              className="rcCard"
              type={type}
              title={res.title}
              text={res.text}
              image={res.image}
              readTime={res.readTime}
              date={res.date}
            />
          );
        })}
      </div>
      {link && (
        <LinkButton
          type={link.type}
          isHollow
          className="rcLink"
          label={link.label}
          href={link.href}
        />
      )}
    </RelatedContentStyled>
  );
};

RelatedContent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.object,
};

export default RelatedContent;
