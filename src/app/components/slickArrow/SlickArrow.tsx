import React from 'react';
import Icon from '../icon/Icon';

interface Props {
  className?: string;
  type: string;
  color: string;
  onClick?: (ev: any) => void;
}

const SlickArrow = ({ className, type, color, onClick }: Props) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      aria-label={`${type === 'chevron-left' ? 'left' : 'right'} slide`}
    >
      <Icon type={type} color={color} />
    </button>
  );
};

export default SlickArrow;
