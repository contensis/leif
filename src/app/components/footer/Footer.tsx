import React from 'react';

import FooterStyled from './Footer.styled';
import FooterColumn from '../footerColumn/FooterColumn';
import Icon from '../icon/Icon';
import Link from '../link/Link';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import data from './data';

export interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  if (!data || data.length < 1) return null;
  return (
    <FooterStyled className={className}>
      <div className="footer__left-column">
        <Link path="/">
          <img
            className="footer__logo"
            src="/static/img/logos/logo-dark.svg"
            alt="Leif"
            width="80"
            height="49"
          />
          <VisuallyHidden text="Home" />
        </Link>
        <div className="footer__icons-wrapper">
          <Link
            path="https://en-gb.facebook.com/"
            className="footer__icon-link"
          >
            <Icon type="facebook" />
            <VisuallyHidden text="Facebook" />
          </Link>
          <Link
            path="https://www.linkedin.com/showcase/contensis"
            className="footer__icon-link"
          >
            <Icon type="linkedin" />
            <VisuallyHidden text="Linkedin" />
          </Link>
          <Link
            path="https://twitter.com/contensis?lang=en"
            className="footer__icon-link"
          >
            <Icon type="twitter" />
            <VisuallyHidden text="Twitter" />
          </Link>
        </div>
      </div>
      <div className="footer__links">
        {data.map(({ title, links }, i: number) => {
          if (!links || links.length < 1) return null;
          return (
            <FooterColumn
              key={`${title}-${i}`}
              className="footer__links-column"
              links={links}
              title={title}
            />
          );
        })}
      </div>
    </FooterStyled>
  );
};

export default Footer;
