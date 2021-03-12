import React from 'react';

import GenericHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';
import Icon from '../icon/Icon';
export interface Props {
  className?: string;
  title: string;
  text?: string;
  backLink?: any;
  linkUri?: string;
  linkLabel?: string;
  imageUri: string;
  imageAlt: string;
  price?: string;
  readTime?: number;
  date?: string;
  isListingPage?: boolean;
  type?: 'default' | 'center';
}

const GenericHero = ({
  className,
  title,
  text,
  backLink,
  linkUri,
  linkLabel,
  imageUri,
  imageAlt,
  price,
  readTime,
  date,
  isListingPage = false,
  type = 'default',
}: Props) => {
  const ConditionalLink = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <GenericHeroStyled
      className={className}
      type={type}
      title={title}
      isListingPage={isListingPage}
    >
      <ConditionalLink
        condition={linkUri}
        wrapper={(children: any) => <a href={linkUri}>{children}</a>}
      >
        <div className="generic-hero__content">
          {backLink && !linkUri && (
            <BackButton className="generic-hero__back" label={backLink.label} />
          )}
          <h1 className="generic-hero__title">{title}</h1>
          {text && <p className="generic-hero__text">{text}</p>}
          <div className="generic-hero__detail">
            {price && (
              <span className="generic-hero__detail-price">£{price}</span>
            )}
            {date && <BlogDetail date={date} readTime={readTime} />}
          </div>
          {linkLabel && (
            <span className="generic-hero__btn">
              {linkLabel}
              <Icon type="arrow-right" color="#2B2F51" />
            </span>
          )}
        </div>
        {imageUri && (
          <Image
            path={imageUri}
            alt={imageAlt}
            className="generic-hero__image"
          />
        )}
      </ConditionalLink>
    </GenericHeroStyled>
  );
};

export default GenericHero;
