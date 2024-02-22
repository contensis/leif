import React from 'react';
import Link from '~/components/link/Link';
import ContentCardStyled from './ContentCard.styled';

export interface Props {
  className?: string;
  title: string;
  text: string;
  image: { src: string; alt?: string };
  path: string;
}

const ContentCard = ({ className, title, text, image, path }: Props) => {
  return (
    <ContentCardStyled className={className}>
      <Link className="content-card__path" path={path}>
        <h4 className="content-card__title">{title}</h4>
      </Link>
      {image?.src && (
        <img
          className="content-card__image"
          height={256}
          width={256}
          loading="lazy"
          src={image?.src}
          alt={image?.alt}
          style={{
            objectFit: 'cover',
          }}
        />
      )}
      <p className="content-card__text">{text}</p>
    </ContentCardStyled>
  );
};

export default ContentCard;
