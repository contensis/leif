import React from 'react';
import { ComposerComponents } from '~/core/schema';

import Composer from './Composer';

export interface Props {
  items: any;
  isContentPage?: boolean;
}

const ComposerWrapper = ({ items, isContentPage = false }: Props) => {
  if (!items || !Array.isArray(items)) return null;

  const promoComponentArray: number[] = [];

  items.forEach((item, idx) => {
    if (item._type === ComposerComponents.promotionalBlock) {
      promoComponentArray.push(idx);
      for (let i = 0; i < promoComponentArray.length; i++) {
        const isEven = i % 2 === 0 ? true : false;
        item.align = isEven ? 'left' : 'right';
        item.hasSVG = isEven ? true : false;
      }
    }
  });

  return (
    <>
      {items.map((componentProps: any, idx: number) => {
        if (!componentProps._type) return null;
        return (
          <Composer
            key={idx}
            isContentPage={isContentPage}
            {...componentProps}
          />
        );
      })}
    </>
  );
};

export default ComposerWrapper;
