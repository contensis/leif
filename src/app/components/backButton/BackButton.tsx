import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';
import { useSelector } from 'react-redux';
import { routing } from '@zengenti/contensis-react-base/redux';

export interface AncestorsProps {
  displayName: string;
  path: string;
}
interface Props {
  className?: string;
  label?: string;
  color?: string;
  path?: string;
}

const BackButton = ({ className, label, path, color = '#6E729B' }: Props) => {
  const getPreviousPage = (array: any[]) => {
    const maxIndex = array ? array.length - 1 : -1;
    return maxIndex >= 0 ? array[maxIndex] : null;
  };

  const ancestors = useSelector(routing.selectors.selectCurrentAncestors);
  const anchestor = getPreviousPage(ancestors);

  if (!path && !anchestor?.path) return null;

  return (
    <BackButtonStyled className={className} path={path || anchestor?.path}>
      <Icon className="back-button__icon" type="arrow-left" color={color} />
      <span className="back-button__text">
        {label || anchestor?.displayName}
      </span>
    </BackButtonStyled>
  );
};

export default BackButton;
