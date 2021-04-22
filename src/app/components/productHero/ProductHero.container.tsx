import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { setActiveVariant } from '../../core/redux/custom/product/actions';
import { addToBasket } from '../../core/redux/custom/basket/actions';
import { setIsModalOpen, setIsPopupOpen } from '../../core/redux/custom/ui/actions';

// Selectors
import { selectActiveVariant } from '../../core/redux/custom/product/selectors';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';
import { selectIsModalOpen, selectIsPopupOpen } from '../../core/redux/custom/ui/selectors';

// Component & Props
import ProductHero, { Props, VariantProps } from './ProductHero';

const ProductHeroContainer = ({
  className,
  id,
  slides,
  review,
  title,
  text,
  variants,
  basket,
  _addToBasket,
  _setActiveVariant,
  _setIsModalOpen,
  _setIsPopupOpen,
  isPopupOpen,
  isModalOpen,
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
      _setIsModalOpen={_setIsModalOpen}
      _setIsPopupOpen={_setIsPopupOpen}
      isPopupOpen={isPopupOpen}
      isModalOpen={isModalOpen}
      activeVariant={activeVariant}
      slides={slides}
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
    isModalOpen: selectIsModalOpen(state),
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
    _setIsModalOpen: (val: boolean) => dispatch(setIsModalOpen(val)),
    _setIsPopupOpen: (val: boolean) => dispatch(setIsPopupOpen(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductHeroContainer));
