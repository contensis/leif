import React from 'react';

import GenericHeroStyled from './GenericHero.styled';
import BackButton, { AncestorsProps } from '../backButton/BackButton';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';
import Icon from '../icon/Icon';
import LinkButton from '../linkButton/LinkButton';
import Link from '../link/Link';

export interface Props {
  className?: string;
  title?: string;
  text?: string;
  ctaLink?: string;
  ctaText?: string;
  imageUri?: string;
  imageAlt?: string;
  price?: number[];
  readTime?: number;
  date?: string;
  isListingPage?: boolean;
  backLinkLabel?: string;
  backLinkUri?: string;
  isRenderedAsLink?: boolean;
  type?: 'Full width' | 'Two column';
  headingLevel?: number;
  ancestors?: AncestorsProps[];
  datePicker?: any;
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
  headingLevel = 1,
  type = 'Two column',
  ancestors,
}: Props) => {
  interface ConditionalLinkProps {
    condition?: boolean;
    wrapper: any;
    children: any;
  }

  const Heading: any = `h${headingLevel}`;

  const ConditionalLink = ({
    condition,
    wrapper,
    children,
  }: ConditionalLinkProps) => (condition ? wrapper(children) : children);

  const priceText =
    price && price.length > 1 ? `${Math.min(...price)}+` : price;

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
          <Link uri={ctaLink} className="generic-hero__link-wrapper">
            {children}
          </Link>
        )}
      >
        <div className="generic-hero__content">
          {!ctaLink && (
            <BackButton
              className="generic-hero__back"
              label={backLinkLabel}
              uri={backLinkUri}
              ancestors={ancestors}
            />
          )}
          <Heading className="generic-hero__title">{title}</Heading>
          {text && <p className="generic-hero__text">{text}</p>}
          {(priceText || date) && (
            <div className="generic-hero__detail">
              {priceText && (
                <span className="generic-hero__detail-price">£{priceText}</span>
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
            src={imageUri}
            alt={imageAlt}
            height={432}
            width={510}
            className="generic-hero__image"
            objectFit="cover"
          />
        )}
      </ConditionalLink>
    </GenericHeroStyled>
  );
};

export default GenericHero;
