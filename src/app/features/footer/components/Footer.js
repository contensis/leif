import React from 'react';

import FooterStyled from '../components.styled/Footer.styled';
import Icon from '../../icon';
import FooterColumn from './FooterColumn';

import logo from '~/assets/logo-dark.png';
import VisuallyHidden from '~/features/visuallyHidden';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {Array} props.data
 */

const Footer = ({ className, data }) => {
  if (!data || data.length < 1) return null;
  return (
    <FooterStyled className={className}>
      <div className="fLeftCol">
        <a href="/" tilte="Home">
          <img className="fLogo" src={logo} alt="Leif" />
          <VisuallyHidden text="Home" />
        </a>
        <div className="fIconsWrapper">
          <a href="#facebook" className="fIconLink">
            <Icon type="facebook" />
            <VisuallyHidden text="Facebook" />
          </a>
          <a href="#linkedin" className="fIconLink">
            <Icon type="linkedin" />
            <VisuallyHidden text="Linkedin" />
          </a>
          <a href="#twitter" className="fIconLink">
            <Icon type="twitter" />
            <VisuallyHidden text="Twitter" />
          </a>
        </div>
      </div>
      <div className="fLinks">
        {data.map((d, idx) => {
          if (!d || !d.links || d.links.length < 1) return null;
          return (
            <FooterColumn
              key={`${d.title}-${idx}`}
              className="fLinksColumn"
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
