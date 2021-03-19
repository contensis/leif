import React from 'react';
import IconWithText from '../iconWithText/IconWithText';

import IconListStyled from './IconList.styled';

export interface Props {
  icons: any | any[];
}

const IconList = ({ icons }: Props) => {
  if (!icons || icons.length < 1) return null;
  return (
    <IconListStyled>
      {icons.map((icon: any, idx: number) => {
        return <IconWithText key={idx} className="icon-list__item" {...icon} />;
      })}
    </IconListStyled>
  );
};

export default IconList;
