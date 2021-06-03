import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions / Selectors
import { setIsModalOpen } from '~/redux/ui/actions';
import { selectIsModalOpen } from '~/redux/ui/selectors';

// Styles
import ProductHeroSliderStyled from './ProductHeroSlider.styled';

// Components
import Icon from '../icon/Icon';
import SlickSlider from '../slickSlider/SlickSlider';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

// Utils
import Wrapper from '../wrapper/Wrapper';
import FocusLock from 'react-focus-lock';
import { _useLockBodyScroll } from '~/utils/hooks/useLockBodyScroll';
import { isClient } from '~/utils/isClient';

export interface Props {
  className?: string;
  slides: any[];
}

interface ProductHeroModalOverlayProps {
  slides: any[] | any;
  _setIsModalOpen: (val: boolean) => void;
}

const ProductHeroModalOverlay = ({
  slides,
  _setIsModalOpen,
}: ProductHeroModalOverlayProps) => {
  _useLockBodyScroll();
  return (
    <FocusLock>
      <div className="product-hero-slider__modal">
        <div className="product-hero-slider__modal-slider">
          <SlickSlider
            slides={slides}
            hasNav={true}
            hasScrollImage={true}
            swipeToSlide={false}
            draggable={false}
          />
        </div>
        <button
          type="button"
          className="product-hero-slider__modal-close"
          onClick={() => _setIsModalOpen(false)}
        >
          <Icon type="close" />
          <VisuallyHidden text="Close" />
        </button>
      </div>
    </FocusLock>
  );
};

const ProductHeroSlider = ({ className, slides }: Props) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const _setIsModalOpen = (val: boolean) => {
    dispatch(setIsModalOpen(val));
  };

  useEffect(() => {
    if (isClient()) {
      if (isModalOpen) {
        window.scrollTo({
          top: 0,
        });
      }
    }
  }, [isModalOpen]);

  return (
    <ProductHeroSliderStyled className={className} isModalOpen={isModalOpen}>
      <Wrapper
        condition={isModalOpen}
        wrapper={() => (
          <>
            <ProductHeroModalOverlay
              slides={slides}
              _setIsModalOpen={_setIsModalOpen}
            />
          </>
        )}
      >
        <SlickSlider slides={slides} hasNav={true} />
        <button
          type="button"
          className="product-hero-slider__fullsize"
          onClick={() => _setIsModalOpen(true)}
        >
          <VisuallyHidden text="Open image slider fullscreen" />
          <Icon
            type="full-size"
            className="product-hero-slider__fullsize-icon"
          />
        </button>
      </Wrapper>
    </ProductHeroSliderStyled>
  );
};

export default ProductHeroSlider;
