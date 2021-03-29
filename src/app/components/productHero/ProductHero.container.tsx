import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { addToBasket } from '../../core/redux/custom/basket/actions';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';

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
}: Props) => {
  return (
    <ProductHero
      className={className}
      id={id}
      basket={basket}
      _addToBasket={_addToBasket}
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _addToBasket: (
      id: number,
      productTitle: string,
      quantity: number,
      activeVariant: VariantProps
    ) => dispatch(addToBasket(id, productTitle, quantity, activeVariant)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductHeroContainer));
