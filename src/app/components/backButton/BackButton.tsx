import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';
import { useSelector } from 'react-redux';
import { selectCurrentAncestors } from '~/core/redux/selectors';

interface Props {
  className?: string;
  label?: string;
  color?: string;
  uri?: string;
}

const BackButton = ({
  className,
  label,
  uri,
  color = '#6E729B',
}: Props) => {
  const nodeAncestors: any = useSelector(selectCurrentAncestors);
  const nodeAncestorsArray = nodeAncestors && nodeAncestors.toJS();

  const getPreviousPage = (array: any[]) => {
    const max = array.length - 1;
    const prev = max === 0 ? 0 : max - 1;
    return array[prev];
  }

  const previousPage = getPreviousPage(nodeAncestorsArray);
  const { path, displayName } = previousPage || {}

  const btnPath = uri ? uri : path
  const btnLabel = label ? label : displayName;

  if (!btnPath) return null;
  return (
    <BackButtonStyled className={className} href={btnPath}>
      <Icon className="back-button__icon" type="arrow-left" color={color} />
      <span className="back-button__text">{btnLabel}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
