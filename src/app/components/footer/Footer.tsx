import React from 'react';

import FooterStyled from './Footer.styled';
import Icon from '../icon/Icon';
import FooterColumn from '../footerColumn/FooterColumn';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

interface DataObject {
  title: string;
  links: Object[];
}

export interface Props {
  className?: string;
  data: any[] | any;
}

const Footer = ({ className, data }: Props) => {
  if (!data || data.length < 1) return null;
  return (
    <FooterStyled className={className}>
      <div className="footer__left-column">
        <a href="/" title="Home">
          <img
            className="footer__logo"
            src="/static/img/logos/logo-dark.png"
            alt="Leif"
          />
          <VisuallyHidden text="Home" />
        </a>
        <div className="footer__icons-wrapper">
          <a href="#facebook" className="footer__icon-link">
            <Icon type="facebook" />
            <VisuallyHidden text="Facebook" />
          </a>
          <a href="#linkedin" className="footer__icon-link">
            <Icon type="linkedin" />
            <VisuallyHidden text="Linkedin" />
          </a>
          <a href="#twitter" className="footer__icon-link">
            <Icon type="twitter" />
            <VisuallyHidden text="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer__links">
        {data.map((d: DataObject, idx: number) => {
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
