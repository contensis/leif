import React, { useState } from 'react';

import FeaturedCTAStyled from './FeaturedCTA.styled';
import Image, { ImageObject } from '../image/Image';
import LinkButton, { Props as LinkButtonProps } from '../linkButton/LinkButton';
import VideoPlayer, { Props as VideoPlayerProps } from '../videoPlayer/VideoPlayer';
import Icon from '../icon/Icon';
import Wrapper from '../wrapper/Wrapper';
import FocusLock from 'react-focus-lock';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import { BodyLockScroll } from '../../utils/bodyLockScroll';


export interface Props {
  className?: string;
  image: ImageObject;
  title: string;
  text: string;
  cta: LinkButtonProps;
  align?: 'right' | 'left';
  hasSVG?: true | false;
  video: VideoPlayerProps;
}

const FeaturedCTA = ({
  className,
  image,
  title,
  text,
  cta,
  video,
  align = 'left',
  hasSVG = false
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasVideo = video?.externalURL || video?.internalVideo;
  BodyLockScroll(isModalOpen);

  return (
    <FeaturedCTAStyled className={className} align={align} hasSVG={hasSVG} isModalOpen={isModalOpen}>
      <Wrapper
        condition={isModalOpen}
        wrapper={(children:any) => (
          <>
            <FocusLock>
              <div className="featured-cta__video-player-wrapper">
                <button
                  type="button"
                  className="featured-cta__video-btn-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <Icon type="cross" />
                  <VisuallyHidden text="Close" />
                </button>
                <VideoPlayer className="featured-cta__video-player" title={video?.title} type={video?.type} externalURL={video?.externalURL} />
              </div>
            </FocusLock>
          </>
        )}
      >
        <div className="featured-cta__image-wrapper">
          <Image image={image} className="featured-cta__image" />
          {hasVideo && (
            <button
              type="button"
              className="featured-cta__video-btn-open"
              onClick={() => setIsModalOpen(true)}
            >
              <VisuallyHidden text="Open video modal" />
              <Icon type="videoPlay" />
            </button>
          )}
        </div>
        <div className="featured-cta__content">
          <div className="featured-cta__wrapper">
            <h3 className="featured-cta__title">{title}</h3>
            <div
              className="featured-cta__text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <LinkButton
              {...cta}
              className="featured-cta__link"
              icon="arrowRight"
            />
          </div>
        </div>
      </Wrapper>
    </FeaturedCTAStyled>
  );
};

export default FeaturedCTA;
