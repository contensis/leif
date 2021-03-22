import React /*, { useState, useEffect }*/ from 'react';

// import { useMinilist } from '@zengenti/contensis-react-base/search';
// import mappers from '../search/transformations';

import ProductSliderStyled from './ProductSlider.styled';
import SlickSlider from '../slickSlider/SlickSlider';
import { sizesNoUnit } from '../../theme/global/layout';
import HeroContent from '../heroContent/HeroContent';

export interface Props {
  className?: string;
  title: string;
  summary: string;
  ctaLink: string;
  ctaText: string;
  bgImageUri: string;
  curatedProducts: any;
}

const ProductSlider = ({
  className,
  title,
  summary,
  ctaLink,
  ctaText,
  bgImageUri,
  curatedProducts,
}: Props) => {
  // if (!slides || slides.length < 1) return null;
  const responsive = [
    {
      breakpoint: sizesNoUnit['tablet'],
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: sizesNoUnit['laptop'],
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: sizesNoUnit['xlargeDesktop'],
      settings: {
        slidesToShow: 3,
      },
    },
  ];

  // const [minilistOptions, setOptions] = useState<any>();
  // useEffect(() => {
  //   setOptions({
  //     id: 'productSlider',
  //     mapper: mappers.results,
  //   });
  // }, []);
  // const { results } = useMinilist(minilistOptions);

  return (
    <ProductSliderStyled className={className} bgImageUri={bgImageUri}>
      <div className="card-slider__overlay" />
      <HeroContent
        className="card-slider__hero-content"
        title={title}
        summary={summary}
        ctaLink={ctaLink}
        ctaText={ctaText}
        btnIcon="product"
      />
      <div className="card-slider__slider">
        <SlickSlider
          type="card"
          slidesToShow={3}
          responsive={responsive}
          slides={curatedProducts}
          className="card-slider__slide"
        />
      </div>
    </ProductSliderStyled>
  );
};

export default ProductSlider;
