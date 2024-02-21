import React from 'react';
import CardRowSpotlightStyled from './CardRowSpotlight.styled';
import Link from '../link/Link';

interface CardProps {
  title: string;
  path: string;
  image: {
    src: string;
    alt?: string;
  };
}

export interface Props {
  cards: CardProps[];
}

const CardRowSpotlight = ({ cards }: Props) => {
  if (!cards || cards.length <= 0) return null;

  const noOfBlocks = cards.length;

  const getLayout = (i: number) => {
    if (noOfBlocks >= 3 && i > 1) return 'minimal';
    else return 'default';
  };

  return (
    <CardRowSpotlightStyled>
      {cards.map((card, i: number) => {
        return (
          <div
            className="card-row-spotlight__card "
            data-layout={getLayout(i)}
            key={i}
          >
            {card?.image?.src && (
              <img
                src={card.image.src}
                alt={card.image?.alt}
                style={{ objectFit: 'cover' }}
                loading="lazy"
                width={200}
                height={200}
              />
            )}
            <Link path={card.path} className="card-row-spotlight__path">
              <h2 className="card-row-spotlight__title">{card.title}</h2>
            </Link>
          </div>
        );
      })}
    </CardRowSpotlightStyled>
  );
};

export default CardRowSpotlight;
