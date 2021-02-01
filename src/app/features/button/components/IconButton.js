import React, { useState } from 'react';

import IconButtonStyled from '../components.styled/IconButton.styled';
import Icon from '../../icon';
import VisuallyHidden from '~/features/visuallyHidden';

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
      <div className="ibWrapper">
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
