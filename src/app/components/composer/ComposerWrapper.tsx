import React from 'react';

import Composer from './Composer';

export interface Props {
  items: any;
  isContentPage?: boolean;
}

const ComposerWrapper = ({ items, isContentPage = false }: Props) => {
  if (!items || !Array.isArray(items)) return null;

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
