import React, { useState } from 'react';

import IconButtonStyled from './IconButton.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.type
 * @param {string} props.text
 */

const IconButton = ({ className, type, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconButtonStyled
      className={className}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="icon-btn__wrapper">
        {!isOpen && (
          <>
            <Icon type={type} />
            <VisuallyHidden text={text} />
          </>
        )}
        {isOpen && <Icon type="cross" />}
      </div>
    </IconButtonStyled>
  );
};

export default IconButton;
