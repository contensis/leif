import React from 'react';
import Icon from '../icon/Icon';

interface Props {
  className?: string;
  onClick?: (ev: any) => void;
  type: string;
}

const SlickArrow = ({ className, type, onClick }: Props) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      aria-label={`${type === 'chevron-left' ? 'left' : 'right'} slide`}
    >
      <Icon type={type} color="#77E8C6" />
    </button>
  );
};

export default SlickArrow;
