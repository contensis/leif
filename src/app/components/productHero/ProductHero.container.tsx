import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { setActiveVariant } from '../../core/redux/custom/product/actions';
import { addToBasket } from '../../core/redux/custom/basket/actions';
import { setIsModalOpen } from '../../core/redux/custom/ui/actions';

// Selectors
import { selectActiveVariant } from '../../core/redux/custom/product/selectors';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';
import { selectIsModalOpen } from '../../core/redux/custom/ui/selectors';

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
  isModalOpen,
  activeVariant,
}: Props) => {
  return (
    <ProductHero
      className={className}
      id={id}
      basket={basket}
      _addToBasket={_addToBasket}
      _setActiveVariant={_setActiveVariant}
      _setIsModalOpen={_setIsModalOpen}
      isModalOpen={isModalOpen}
      activeVariant={activeVariant}
      slides={slides}
      review={review}
      title={title}
      text={text}
      variants={variants}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    basket: selectProductsInBasket(state),
    activeVariant: selectActiveVariant(state),
    isModalOpen: selectIsModalOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _addToBasket: (
      id: string,
      productTitle: string,
      quantity: number,
      activeVariant: VariantProps
    ) => dispatch(addToBasket(id, productTitle, quantity, activeVariant)),
    _setActiveVariant: (value: VariantProps) =>
      dispatch(setActiveVariant(value)),
    _setIsModalOpen: (val: boolean) => dispatch(setIsModalOpen(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductHeroContainer));
