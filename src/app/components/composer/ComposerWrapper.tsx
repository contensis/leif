import React from 'react';
import { ComposerComponents } from '~/core/schema';

import ComposerComponent from './Composer';

import { Props as ComposerProps } from './Composer.d';

export interface Props {
  items: ComposerProps;
  isContentPage?: boolean;
  isHomepage?: boolean;
}

const ComposerWrapper = ({
  items,
  isContentPage = false,
  isHomepage = false,
}: Props) => {
  if (!items || !Array.isArray(items)) return null;

  const promoComponentArray: number[] = [];

  items.forEach((item, idx) => {
    if (
      item._type === ComposerComponents.promotedProduct ||
      item._type === ComposerComponents.promotedProductNew
    ) {
      promoComponentArray.push(idx);
      for (let i = 0; i < promoComponentArray.length; i++) {
        const isEven = i % 2 === 0 ? true : false;
        item.align = isEven ? 'left' : 'right';
        item.hasTrending =
          (idx === 0 && isHomepage) || (item.hasTrending && isHomepage)
            ? true
            : false;
      }
    }
  });

  return (
    <>
      {items.map((componentProps: any, idx: number) => {
        if (!componentProps._type) return null;
        return (
          <ComposerComponent
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
