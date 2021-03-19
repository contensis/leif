import React, { useEffect, useState } from 'react';
import AccordionStyled from '../accordion/Accordion.styled';
import Icon from '../icon/Icon';
import TextBlock from '../textBlock/TextBlock';

interface Props {
  className?: string;
  title: string;
  content: string;
  idx: number;
  pOpen: any;
  _handleToggle: (idx: number) => void;
}

const AccordionItem = ({
  className,
  title,
  content,
  idx,
  pOpen,
  _handleToggle,
}: Props) => {
  const [isOpen, setIsOpen] = useState(pOpen);

  const _handleClick = () => {
    if (pOpen === 'undefined') setIsOpen(!isOpen);
    else _handleToggle(idx);
  };

  useEffect(() => {
    setIsOpen(pOpen);
  }, [pOpen]);

  return (
    <AccordionStyled className={className}>
      <button
        type="button"
        onClick={() => _handleClick()}
        aria-expanded={isOpen}
        className="accordion-item__button"
      >
        {title}
        <Icon
          className="accordion-item__icon"
          type={isOpen ? 'arrow-up' : 'arrow-down'}
        />
      </button>
      {isOpen && <TextBlock className="accordion-item__panel" text={content} />}
    </AccordionStyled>
  );
};

export default AccordionItem;
