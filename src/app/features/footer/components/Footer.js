import React from 'react';
import PropTypes from 'prop-types';

import FooterStyled from '../components.styled/Footer.styled';
import Icon from '../../icon';

// import logo from '../../../public/logos/logo-dark.png';

const Footer = ({ className, data }) => {
  if (!data || data.length < 1) return null;
  return (
    <FooterStyled className={className}>
      <div className="fLeftCol">
        {/* <img className="fLogo" src={logo} alt="Leif" /> */}
        <div className="fIconsWrapper">
          <Icon type="facebook" />
          <Icon type="linkedin" />
          <Icon type="twitter" />
        </div>
      </div>
      {data.map((d, idx) => {
        if (!d || !d.links || d.links.length < 1) return null;
        return (
          <div key={`${d.title}-${idx}`} className="fLinksWrapper">
            <h5 className="fLinkTitle">{d.title}</h5>
            <div className="fSubLinksWrapper">
              {d.links.map(l => {
                return (
                  <a className="fSubLink" key={l.title} href={l.uri}>
                    {l.title}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </FooterStyled>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
