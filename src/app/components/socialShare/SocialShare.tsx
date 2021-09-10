import React from 'react';

import SocialShareStyled from './SocialShare.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

import copy from 'copy-to-clipboard';
import { socials } from './utils';
import { useSelector } from 'react-redux';
import { selectCurrentPath } from '~/core/redux/selectors';

export interface Props {
  className?: string;
}

const SocialShare = ({ className }: Props) => {
  if (!socials || socials.length < 1) return null;
  /* global PUBLIC_URI */
  const uri = PUBLIC_URI;
  const path = useSelector(selectCurrentPath);
  const fullSharePath = `${uri}${path}`;

  return (
    <SocialShareStyled className={className}>
      {socials.map((s, idx) => {
        if (!s) return null;
        return (
          <a
            className={`social-share__icon social-share__${s.title}`}
            href={encodeURI(`${s.path}${fullSharePath}`)}
            key={`${s.title}-${idx}`}
          >
            <Icon type={s.icon} color="#C3C6DE" />
            <VisuallyHidden text={`Share on ${s.title}`} />
          </a>
        );
      })}
      <button
        className="social-share__copy"
        type="button"
        onClick={() => copy(fullSharePath)}
      >
        <Icon type="link" color="#C3C6DE" />
        <VisuallyHidden text="Copy link" />
      </button>
    </SocialShareStyled>
  );
};

export default SocialShare;
