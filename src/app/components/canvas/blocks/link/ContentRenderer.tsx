import React from 'react';

const ContentRenderer = ({
  contents,
  fallback,
}: {
  contents?: React.ReactElement;
  fallback: React.ReactElement;
}) => {
  return contents || fallback;
};

export default ContentRenderer;
