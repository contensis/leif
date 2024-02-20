import React from 'react';
import { CardTypes } from '~/core/schema';
import BlogCard, { Props as BlogProps } from './blogCard/BlogCard';
import ExploreMore, { Props as ExploreProps } from './exploreMore/ExploreMore';
import ProductCard, { Props as ProductProps } from './productCard/ProductCard';
import ContentCard, { Props as ContentProps } from './contentCard/ContentCard';

interface CardProps {
  type: 'blog' | 'product' | 'explore' | 'content';
}

const Card = ({ type, ...rest }: CardProps) => {
  if (type === CardTypes.Blog) {
    return <BlogCard {...(rest as BlogProps)} />;
  }
  if (type === CardTypes.Explore) {
    return <ExploreMore {...(rest as ExploreProps)} />;
  }
  if (type === CardTypes.Product) {
    return <ProductCard {...(rest as ProductProps)} />;
  }
  if (type === CardTypes.Content) {
    return <ContentCard {...(rest as ContentProps)} />;
  }

  return <ExploreMore {...(rest as ExploreProps)} />;
};

export default Card;
