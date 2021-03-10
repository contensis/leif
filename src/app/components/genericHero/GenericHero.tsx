import React from 'react';

import GenericHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
import LinkButton from '../linkButton/LinkButton';
import BlogDetail from '../blogDetail/BlogDetail';
export interface Props {
  className?: string;
  title: string;
  text?: string;
  backLink?: any;
  link?: any;
  image?: any;
  detail?: any;
  type?: 'default' | 'center';
}

const GenericHero = ({
  className,
  title,
  text,
  backLink,
  link,
  image,
  detail,
  type = 'default',
}: Props) => {
  const linkUri = link && link.href;
  const hasLink = linkUri ? true : false;
  return (
    <GenericHeroStyled
      className={className}
      type={type}
      hasLink={hasLink}
      title={title}
      uri={linkUri}
    >
      <div className="generic-hero__content">
        {backLink && !hasLink && (
          <BackButton className="generic-hero__back" label={backLink.label} />
        )}
        <h1 className="generic-hero__title">{title}</h1>
        {text && <p>{text}</p>}
        {detail && (
          <div className="generic-hero__detail">
            {detail.price && (
              <span className="generic-hero__detail-price">
                £{detail.price}
              </span>
            )}
            <BlogDetail date={detail.date} readTime={detail.readTime} />
          </div>
        )}
        {link && (
          <LinkButton
            className="generic-hero__btn"
            label={link.label}
            href={link.href}
            icon="arrowRight"
            isHollow
            type="secondary"
          />
        )}
      </div>
      {image && <Image image={image} className="generic-hero__image" />}
    </GenericHeroStyled>
  );
};

export default GenericHero;
