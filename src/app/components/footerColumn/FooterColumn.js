import React, { useState } from 'react';
import Icon from '../icon/Icon';

import FooterColumnStyled from './FooterColumn.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {Array} props.links
 */

const FooterColumn = ({ className, title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!links || links.length < 1) return null;
  return (
    <FooterColumnStyled className={className} isOpen={isOpen}>
      <button className="footer-column__btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Icon
          className="footer-column__icon"
          type={`chevron${isOpen ? 'Up' : 'Down'}`}
        />
      </button>
      <h5 className="footer-column__title">{title}</h5>
      <div className="footer-column__sub-links">
        {links.map(l => {
          return (
            <a className="footer-column__sub-link" key={l.title} href={l.uri}>
              {l.title}
            </a>
          );
        })}
      </div>
    </FooterColumnStyled>
  );
};

export default FooterColumn;
