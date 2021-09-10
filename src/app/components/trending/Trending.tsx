import React from 'react';

import TrendingStyled from './Trending.styled';
import LinkButton from '../linkButton/LinkButton';

export interface TrendingButtonProps {
  label: string;
  icon: string;
  type: string;
  isHollow: boolean;
  href: string;
}
export interface Props {
  className?: string;
  buttons?: TrendingButtonProps[];
}

const Trending = ({ className, buttons }: Props) => {
  if (!buttons || buttons.length < 0) return null;
  return (
    <TrendingStyled className={className}>
      {buttons?.map((btn, idx) => {
        return (
          <LinkButton
            key={idx}
            {...btn}
            icon="arrow-right"
            isHollow
            type="secondary"
          />
        );
      })}
    </TrendingStyled>
  );
};

export default Trending;
