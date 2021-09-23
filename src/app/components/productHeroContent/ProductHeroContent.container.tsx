import React from 'react';
import { connect } from 'react-redux';

// Actions
import { setActiveVariant } from '~/redux/product/actions';
import { addToBasket } from '~/redux/basket/actions';
import { setIsPopupOpen } from '~/redux/ui/actions';

// Selectors
import { selectActiveVariant } from '~/redux/product/selectors';
import { selectProductsInBasket } from '~/redux/basket/selectors';
import { selectIsPopupOpen } from '~/redux/ui/selectors';

// Component & Props
import ProductHero, { Props, VariantProps } from './ProductHeroContent';

const ProductHeroContentContainer = ({
  className,
  id,
  review,
  title,
  text,
  variants,
  basket,
  _addToBasket,
  _setActiveVariant,
  _setIsPopupOpen,
  isPopupOpen,
  activeVariant,
  imageUri,
}: Props) => {
  return (
    <ProductHero
      className={className}
      id={id}
      basket={basket}
      _addToBasket={_addToBasket}
      _setActiveVariant={_setActiveVariant}
      _setIsPopupOpen={_setIsPopupOpen}
      isPopupOpen={isPopupOpen}
      activeVariant={activeVariant}
      review={review}
      title={title}
      text={text}
      variants={variants}
      imageUri={imageUri}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    basket: selectProductsInBasket(state),
    activeVariant: selectActiveVariant(state),
    isPopupOpen: selectIsPopupOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _addToBasket: (
      id: string,
      imageUri: string,
      productTitle: string,
      quantity: number,
      activeVariant: VariantProps
    ) =>
      dispatch(
        addToBasket(id, imageUri, productTitle, quantity, activeVariant)
      ),
    _setActiveVariant: (value: VariantProps) =>
      dispatch(setActiveVariant(value)),
    _setIsPopupOpen: (val: boolean) => dispatch(setIsPopupOpen(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductHeroContentContainer);
