import React from 'react';

import ComposerComponent from './Composer';

import { Props as ComposerProps } from './Composer.d';

export interface Props {
  items?: ComposerProps;
  isContentPage?: boolean;
  isHomepage?: boolean;
}

const ComposerWrapper = ({ items, isContentPage = false }: Props) => {
  if (!items || !Array.isArray(items)) return null;

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
