import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { addToBasket } from '../../core/redux/custom/basket/actions';
import { selectBasket } from '../../core/redux/custom/basket/selectors';

import ProductHero, { Props } from './ProductHero';

const ProductHeroContainer = ({
  className,
  id,
  slides,
  rating,
  title,
  text,
  price,
  options,
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
      price={price}
      options={options}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    basket: selectBasket(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _addToBasket: (id: number, opt: string, title: string, quantity: number) =>
      dispatch(addToBasket(id, opt, title, quantity)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(ProductHeroContainer));
