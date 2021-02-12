import React from 'react';

import SocialShareStyled from './SocialShare.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

import copy from 'copy-to-clipboard';
import { socials } from './utils';

interface Props {
  className?: string;
}

const SocialShare = ({ className }: Props) => {
  if (!socials || socials.length < 1) return null;
  // TODO:
  const sharePath = 'publicUrl+currentPath';

  return (
    <SocialShareStyled className={className}>
      {socials.map((s, idx) => {
        if (!s) return null;
        return (
          <a
            className={`social-share__icon social-share__${s.title}`}
            href={`${s.path}${sharePath}`}
            title={`Share on ${s.title}`}
            key={`${s.title}-${idx}`}
          >
            <Icon type={s.icon} />
            <VisuallyHidden text={`Share on ${s.title}`} />
          </a>
        );
      })}
      <button
        className="social-share__copy"
        type="button"
        onClick={() => copy(sharePath)}
      >
        <Icon type="link" />
        <VisuallyHidden text="Copy link" />
      </button>
    </SocialShareStyled>
  );
};

export default SocialShare;
