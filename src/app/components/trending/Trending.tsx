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
  const hasButtons = buttons && buttons.length >= 1 ? true : false;
  return (
    <TrendingStyled className={className}>
      {!hasButtons && (
        <>
          <LinkButton
            icon="arrow-right"
            isHollow
            type="secondary"
            label="Pots"
            href="/products/pot"
          />
          <LinkButton
            icon="arrow-right"
            isHollow
            type="secondary"
            label="Plants"
            href="/products/plant"
          />
          <LinkButton
            icon="arrow-right"
            isHollow
            type="secondary"
            label="Foliage"
            href="/products/plant?plantType=25f5a78b-9274-4cc9-9a58-03d8dcd4cd17"
          />
        </>
      )}
      {hasButtons &&
        buttons?.map((btn, idx) => {
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
