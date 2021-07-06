import React from 'react';

import FooterStyled from './Footer.styled';
import Icon from '../icon/Icon';
import FooterColumn from '../footerColumn/FooterColumn';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import data from './data';

interface LinkObjectProps {
  title: string;
  uri: string;
}
interface DataObjectProps {
  title: string;
  links: LinkObjectProps[];
}

export interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  if (!data || data.length < 1) return null;
  return (
    <FooterStyled className={className}>
      <div className="footer__left-column">
        <a href="/">
          <img
            className="footer__logo"
            src="/static/img/logos/logo-dark.svg"
            alt="Leif"
          />
          <VisuallyHidden text="Home" />
        </a>
        <div className="footer__icons-wrapper">
          <a href="https://en-gb.facebook.com/" className="footer__icon-link">
            <Icon type="facebook" />
            <VisuallyHidden text="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/showcase/contensis"
            className="footer__icon-link"
          >
            <Icon type="linkedin" />
            <VisuallyHidden text="Linkedin" />
          </a>
          <a
            href="https://twitter.com/contensis?lang=en"
            className="footer__icon-link"
          >
            <Icon type="twitter" />
            <VisuallyHidden text="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer__links">
        {data.map((d: DataObjectProps, idx: number) => {
          if (!d || !d.links || d.links.length < 1) return null;
          return (
            <FooterColumn
              key={`${d.title}-${idx}`}
              className="footer__links-column"
              links={d.links}
              title={d.title}
            />
          );
        })}
      </div>
    </FooterStyled>
  );
};

export default Footer;
