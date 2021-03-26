import React from 'react';

import GenericHeroStyled from './GenericHero.styled';
import BackButton from '../backButton/BackButton';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';

export interface Props {
  className?: string;
  title: string;
  text?: string;
  ctaLink?: string;
  ctaText?: string;
  imageUri: string;
  imageAlt: string;
  price?: string;
  readTime?: number;
  date?: string;
  isListingPage?: boolean;
  backLinkLabel?: string;
  backLinkUri?: string;
  isRenderedAsLink?: boolean;
  type?: 'Full width' | 'Two column';
}

const GenericHero = ({
  className,
  title,
  text,
  backLinkLabel,
  backLinkUri,
  ctaLink,
  ctaText,
  imageUri,
  imageAlt,
  price,
  readTime,
  date,
  isListingPage = false,
  isRenderedAsLink = false,
  type = 'Two column',
}: Props) => {
  interface ConditionalLinkProps {
    condition?: boolean;
    wrapper: any;
    children: any;
  }

  const ConditionalLink = ({
    condition,
    wrapper,
    children,
  }: ConditionalLinkProps) => (condition ? wrapper(children) : children);

  return (
    <GenericHeroStyled
      className={className}
      type={type}
      title={title}
      isListingPage={isListingPage}
      hasPaddingTop={!backLinkUri}
    >
      <ConditionalLink
        condition={isRenderedAsLink}
        wrapper={(children: any) => (
          <a href={ctaLink} className="generic-hero__link-wrapper">
            {children}
          </a>
        )}
      >
        <div className="generic-hero__content">
          {backLinkUri && !ctaLink && (
            <BackButton
              className="generic-hero__back"
              label={backLinkLabel}
              uri={backLinkUri}
            />
          )}
          <h1 className="generic-hero__title">{title}</h1>
          {text && <p className="generic-hero__text">{text}</p>}
          {(price || date) && (
            <div className="generic-hero__detail">
              {price && (
                <span className="generic-hero__detail-price">£{price}</span>
              )}
              {date && <BlogDetail date={date} readTime={readTime} />}
            </div>
          )}
          {ctaLink && (
            <>
              {isRenderedAsLink && (
                <span className="generic-hero__btn">
                  {ctaText}
                  <Icon type="arrow-right" color="#2B2F51" />
                </span>
              )}
              {!isRenderedAsLink && (
                <LinkButton
                  className="generic-hero__link"
                  icon="arrow-right"
                  label={ctaText}
                  href={ctaLink}
                />
              )}
            </>
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
