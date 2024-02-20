import React, { useState } from 'react';
import Icon from '../icon/Icon';
import Link from '../link/Link';

import FooterColumnStyled from './FooterColumn.styled';

interface LinkObject {
  title: string;
  path: string;
}

interface Props {
  className?: string;
  title: string;
  links: any[] | any;
}

const FooterColumn = ({ className, title, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!links || links.length < 1) return null;
  return (
    <FooterColumnStyled className={className} isOpen={isOpen}>
      <button className="footer-column__btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Icon
          className="footer-column__icon"
          type={`chevron-${isOpen ? 'up' : 'down'}`}
        />
      </button>
      <h3 className="footer-column__title">{title}</h3>
      <div className="footer-column__sub-links">
        {links.map((link: LinkObject) => {
          return (
            <Link
              className="footer-column__sub-link"
              key={link.title}
              path={link.path}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </FooterColumnStyled>
  );
};

export default FooterColumn;
