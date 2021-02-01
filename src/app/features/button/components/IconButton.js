import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButtonStyled from '../components.styled/IconButton.styled';
import Icon from '../../icon';
import VisuallyHidden from '~/features/visuallyHidden';

const IconButton = ({ type, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconButtonStyled type="button" onClick={() => setIsOpen(!isOpen)}>
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

IconButton.propTypes = {
  clasSName: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default IconButton;
