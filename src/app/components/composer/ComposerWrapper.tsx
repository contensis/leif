import React from 'react';

import Composer from './Composer';

const ComposerWrapper = ({ items }: any) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <>
      {items.map((componentProps: any, idx: number) => {
        if (!componentProps._type) return null;
        return <Composer key={idx} {...componentProps} />;
      })}
    </>
  );
};

export default ComposerWrapper;
