import React, { useState } from 'react';

import PromotionalBlockStyled from './PromotedProduct.styled';
import Image from '../image/Image';
import LinkButton from '../linkButton/LinkButton';
import VideoPlayer, {
  Props as VideoPlayerProps,
} from '../videoPlayer/VideoPlayer';
import Icon from '../icon/Icon';
import Wrapper from '../wrapper/Wrapper';
import FocusLock from 'react-focus-lock';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import Trending from '../trending/Trending';

export interface Props {
  className?: string;
  imageUri: string;
  imageAlt: string;
  title: string;
  text: string;
  ctaLink: string;
  ctaText: string;
  align?: 'right' | 'left';
  hasTrending: boolean;
  video: VideoPlayerProps;
  buttons?: [];
}

const PromotionalBlock = ({
  className,
  imageUri,
  imageAlt,
  title,
  text,
  ctaLink,
  ctaText,
  video,
  align = 'left',
  hasTrending = false,
  buttons,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const hasVideo = video && (video.externalURL || video.internalVideo);

  return (
    <PromotionalBlockStyled
      className={className}
      align={align}
      isModalOpen={isModalOpen}
      hasTrending={hasTrending}
    >
      <Wrapper
        condition={isModalOpen}
        wrapper={() => (
          <>
            <FocusLock>
              <div className="promoted-product__video-player-wrapper">
                <button
                  type="button"
                  className="promoted-product__video-btn-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <Icon type="close" />
                  <VisuallyHidden text="Close" />
                </button>
                <VideoPlayer
                  className="promoted-product__video-player"
                  title={video?.title}
                  type={video?.type}
                  externalURL={video?.externalURL}
                />
              </div>
            </FocusLock>
          </>
        )}
      >
        <div className="promoted-product__image-wrapper">
          {imageUri && (
            <Image
              src={imageUri}
              alt={imageAlt}
              quality={80}
              layout="fill"
              objectFit="cover"
              className="promoted-product__image"
            />
          )}
          {hasVideo && (
            <button
              type="button"
              className="promoted-product__video-btn-open"
              onClick={() => setIsModalOpen(true)}
            >
              <VisuallyHidden text="Open video modal" />
              <Icon type="video-play" width={64} height={55} />
            </button>
          )}
        </div>
        <div className="promoted-product__content">
          {hasTrending && (
            <Trending
              buttons={buttons}
              className="promoted-product__trending"
            />
          )}
          <div className="promoted-product__content--text">
            <div className="promoted-product__wrapper">
              {title && <h2 className="promoted-product__title">{title}</h2>}
              {text && (
                <div
                  className="promoted-product__text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {ctaLink && (
                <LinkButton
                  className="promoted-product__link"
                  icon="arrow-right"
                  label={ctaText}
                  href={ctaLink}
                />
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </PromotionalBlockStyled>
  );
};

export default PromotionalBlock;
