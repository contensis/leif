import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { addToBasket } from '../../core/redux/custom/basket/actions';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';
import { setActiveVariant } from '../../core/redux/custom/product/actions';
import { selectActiveVariant } from '../../core/redux/custom/product/selectors';

import ProductHero, { Props, VariantProps } from './ProductHero';

const ProductHeroContainer = ({
  className,
  id,
  slides,
  rating,
  title,
  text,
  variants,
  basket,
  _addToBasket,
  _setActiveVariant,
  activeVariant,
}: Props) => {
  return (
    <ProductHero
      className={className}
      id={id}
      basket={basket}
      _addToBasket={_addToBasket}
      _setActiveVariant={_setActiveVariant}
      activeVariant={activeVariant}
      slides={slides}
      rating={rating}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductHeroContainer));
