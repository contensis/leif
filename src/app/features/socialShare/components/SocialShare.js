import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import SocialShareStyled from '../components.styled/SocialShare.styled';
import { socials } from '../utils/';
import Icon from '../../icon';
import VisuallyHidden from '~/features/visuallyHidden';
import copy from 'copy-to-clipboard';

const SocialShare = ({ className }) => {
  if (!socials || socials.length < 1) return null;
  // TODO:
  const sharePath = 'publicUrl+currentPath';

  return (
    <SocialShareStyled className={className}>
      {socials.map((s, idx) => {
        if (!s) return null;
        return (
          <a
            className={`ssIcon ss${s.title}`}
            href={`${s.path}${sharePath}`}
            title={`Share on ${s.title}`}
            key={`${s.title}-${idx}`}
          >
            <Icon type={s.icon} />
            <VisuallyHidden text={`Share on ${s.title}`} />
          </a>
        );
      })}
      <button className="ssCopy" type="button" onClick={() => copy(sharePath)}>
        <Icon type="link" />
        <VisuallyHidden text="Copy link" />
      </button>
    </SocialShareStyled>
  );
};

SocialShare.propTypes = {
  className: PropTypes.string,
};

export default SocialShare;
