import React from 'react';
import { Helmet } from 'react-helmet';

export interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Metadata = ({
  title = 'Leif - Home of plants',
  description,
  image,
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />

      <meta property="twitter:title" content={title} />
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default Metadata;
