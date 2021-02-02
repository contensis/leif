import React, { useState } from 'react';
import Icon from '~/features/icon';

import FooterColumnStyled from '../components.styled/FooterColumn.styled';

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
      <button className="fcLinkTitleBtn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Icon className="fcIcon" type={`chevron${isOpen ? 'Up' : 'Down'}`} />
      </button>
      <h5 className="fcLinkTitle">{title}</h5>
      <div className="fcSubLinksWrapper">
        {links.map(l => {
          return (
            <a className="fcSubLink" key={l.title} href={l.uri}>
              {l.title}
            </a>
          );
        })}
      </div>
    </FooterColumnStyled>
  );
};

export default FooterColumn;
