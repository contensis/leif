import React from 'react';

// Components
import LinkButton from '~/components/linkButton/LinkButton';
import Metadata from '~/components/metadata/Metadata';
import Image from '~/components/image/Image';

// Layout
import MainLayout from '../../layout/MainLayout';
import NotFoundStyled from './NotFound.styled';

const NotFound = () => {
  return (
    <MainLayout>
      <NotFoundStyled>
        <div className="not-found__content">
          <Metadata
            title="404 - Page not found"
            image="/image-library/default-images/leif-fallback.png"
          />
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">
            The page you were looking for appears to have been moved, deleted or
            does not exist.
          </p>
          <LinkButton
            href="/"
            type="secondary"
            label="Return to home page"
            className="not-found__link-btn"
            isHollow={true}
          />
        </div>
        <Image
          className="not-found__image"
          src="/static/img/illustrations/woman-with-map.png"
          alt="Women with map"
        />
      </NotFoundStyled>
    </MainLayout>
  );
};

export default NotFound;
