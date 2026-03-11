import React from 'react';
import Link from '../link/Link';
import PlantCategoryGridStyled from './PlantCategoryGrid.styled';
import { Props } from './PlantCategoryGrid.d';

const PlantCategoryGrid = ({ title, categories }: Props) => {
  if (!categories || categories.length < 1) return null;

  return (
    <PlantCategoryGridStyled data-component="plant-category-grid">
      <div className="plant-category-grid__inner">
        {title && <h2 className="plant-category-grid__title">{title}</h2>}
        <ul className="plant-category-grid__grid" role="list">
          {categories.map((category, index) => (
            <li key={index} className="plant-category-grid__card">
              <img
                className="plant-category-grid__image"
                src={category.image.src}
                alt={category.image.alt}
                loading="lazy"
              />
              <div className="plant-category-grid__card-body">
                <h3 className="plant-category-grid__card-title">
                  <Link
                    className="plant-category-grid__card-link"
                    path={category.path}
                  >
                    {category.title}
                  </Link>
                </h3>
                {category.description && (
                  <p className="plant-category-grid__card-description">
                    {category.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PlantCategoryGridStyled>
  );
};

export default PlantCategoryGrid;
