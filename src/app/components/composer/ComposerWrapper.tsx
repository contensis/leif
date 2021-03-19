import React from 'react';

import Composer from './Composer';

export interface Props {
  items: any;
  isLandingPage?: boolean;
}

const ComposerWrapper = ({ items, isLandingPage = false }: Props) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <>
      {items.map((componentProps: any, idx: number) => {
        if (!componentProps._type) return null;
        return (
          <Composer
            key={idx}
            isLandingPage={isLandingPage}
            {...componentProps}
          />
        );
      })}
    </>
  );
};

export default ComposerWrapper;
