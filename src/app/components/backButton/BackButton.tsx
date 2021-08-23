import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';

export interface AncestorsProps {
  displayName: string;
  path: string;
}
interface Props {
  className?: string;
  ancestors: AncestorsProps[];
  label?: string;
  color?: string;
  uri?: string;
}

const BackButton = ({
  className,
  label,
  uri,
  ancestors,
  color = '#6E729B',
}: Props) => {
  const getPreviousPage = (array: any[]) => {
    if (!array || array.length < 0) return null;
    const max = array.length - 1;
    const prev = max === 0 ? 0 : max;
    return array[prev];
  };

  const previousPage: AncestorsProps = getPreviousPage(ancestors);
  const { path, displayName } = previousPage || {};

  const btnPath = uri ? uri : path;
  const btnLabel = label ? label : displayName;

  if (!btnPath) return null;
  return (
    <BackButtonStyled className={className} uri={btnPath}>
      <Icon className="back-button__icon" type="arrow-left" color={color} />
      <span className="back-button__text">{btnLabel}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
