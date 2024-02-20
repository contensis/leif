import React from 'react';
import CardRowStyled from './CardRow.styled';
import LinkButton from '../linkButton/LinkButton';
import { useWindowSize } from 'usehooks-ts';
import Card from '~/components/card/Card';

export interface Props {
  className?: string;
  title: string;
  cards: any[];
  btn?: { path: string; label: string };
}

const CardRow = ({ className, title, cards, btn }: Props) => {
  const noOfblocks = cards.length;

  const { width } = useWindowSize();
  const isDesktop = width >= 1440;
  const isTablet = width >= 768 && width <= 1440;
  const elGridContainer = React.useRef<HTMLDivElement>(null);

  const useDynamicColumns = () => {
    React.useEffect(() => {
      if (typeof window == 'undefined') return;
      if (!elGridContainer?.current) return;

      const grid = elGridContainer?.current;

      const getCSS = (px: number | string) =>
        `repeat(auto-fill, minmax(${px}px, 1fr))`;

      const onResize = () => {
        if (isTablet) {
          if (noOfblocks % 2 === 0) {
            grid.style.gridTemplateColumns = getCSS(408);
          }
          if (noOfblocks % 3 === 0) {
            grid.style.gridTemplateColumns = getCSS(300);
          }
          if (noOfblocks % 4 === 0) {
            grid.style.gridTemplateColumns = getCSS(240);
          }
        }
        if (isDesktop) {
          if (noOfblocks % 2 === 0) {
            grid.style.gridTemplateColumns = getCSS(280);
          }
          if (noOfblocks % 3 === 0) {
            grid.style.gridTemplateColumns = getCSS(380);
          }
          if (noOfblocks % 4 === 0) {
            grid.style.gridTemplateColumns = getCSS(280);
          }
        }
      };

      window.addEventListener('resize', onResize);
      onResize();

      return () => window.removeEventListener('resize', onResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noOfblocks, elGridContainer?.current, isDesktop, isTablet]);
  };

  useDynamicColumns();

  if (!cards || cards.length < 1) return null;
  return (
    <CardRowStyled className={className} data-component="card-row">
      {title && <h3 className="card-row__title">{title}</h3>}
      <div className="card-row__container" ref={elGridContainer}>
        {cards.map((card, i: number) => {
          return <Card key={i} {...card} />;
        })}
      </div>
      {btn?.path && (
        <div className="card-row__btn--wrapper">
          <LinkButton
            className="card-row__btn"
            path={btn.path}
            label={btn.label}
          />
        </div>
      )}
    </CardRowStyled>
  );
};

export default CardRow;
