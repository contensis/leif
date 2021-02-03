import React from 'react';
import Card from '../card/Card';

import RelatedContentStyled from './RelatedContent.styled';
import LinkButton from '../linkButton/LinkButton';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {Array} props.results
 * @param {object} props.link
 */

const RelatedContent = ({ className, title, results, link }) => {
  if (!results || results.length < 1) return null;
  return (
    <RelatedContentStyled className={className}>
      {title && <h3 className="related-content__title">{title}</h3>}
      <div className="related-content__results">
        <div className="related-content__results-wrapper">
          {results.map((res, idx) => {
            if (!res) return null;
            const type = res && res.sys && res.sys.contentTypeId;
            return (
              <Card
                key={`${res.title}-${idx}`}
                className="related-content__card"
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
            className="related-content__link"
            label={link.label}
            href={link.href}
          />
        )}
      </div>
    </RelatedContentStyled>
  );
};

export default RelatedContent;
