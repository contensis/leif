import React, { useEffect, useState } from 'react';

import AccordionStyled from './Accordion.styled';
import AccordionItem from '../accordionItem/AccordionItem';

export interface Props {
  className?: string;
  items: any;
  title?: string;
}

const Accordion = ({ className, items, title }: Props) => {
  const [isAllOpen, setIsAllOpen] = useState<boolean>(false);
  const [wrapperAccordions, setWrapperAccordions] = useState<any>();
  const btnText = isAllOpen ? 'Close all' : 'Open all';

  useEffect(() => {
    setWrapperAccordions(
      items.map((item: any) => {
        return { ...item, isOpen: false };
      })
    );
  }, [items]);

  const _handleToggleAll = () => {
    const toggledState = !isAllOpen;
    setWrapperAccordions(
      wrapperAccordions &&
        wrapperAccordions.map((item: any) => {
          return { ...item, isOpen: toggledState };
        })
    );
    setIsAllOpen(toggledState);
  };

  const _handleToggle = (indexIn: number) => {
    setWrapperAccordions(
      wrapperAccordions &&
        wrapperAccordions.map((item: any, index: number) => {
          if (indexIn === index) {
            return { ...item, isOpen: !item.isOpen };
          } else {
            return item;
          }
        })
    );
  };

  useEffect(() => {
    if (wrapperAccordions) {
      setIsAllOpen(
        wrapperAccordions.every((item: any) => item.isOpen === true)
      );
    }
  }, [wrapperAccordions]);

  if (!items || items.length < 1) return null;
  return (
    <AccordionStyled className={className}>
      <div className="accordion__header">
        {title && <h2 className="accordion__title">{title}</h2>}
        <button
          className="accordion__btn"
          type="button"
          onClick={() => _handleToggleAll()}
        >
          {btnText}
        </button>
      </div>
      {wrapperAccordions &&
        wrapperAccordions.map((item: any, idx: number) => {
          return (
            <AccordionItem
              key={idx}
              title={item.title}
              content={item.content}
              pOpen={item.isOpen}
              _handleToggle={_handleToggle}
              idx={idx}
              className="accordion__item"
            />
          );
        })}
    </AccordionStyled>
  );
};

export default Accordion;
