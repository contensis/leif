import React from 'react';
import Callout from '../callout/Callout';

// Style
import NoResultsStyled from './NoReuslts.styled';

export interface Props {
  className?: string;
  title: string;
  text: string;
}

const NoResults = ({ className, title, text }: Props) => {
  return (
    <NoResultsStyled className={className}>
      <img
        className="no-results__image"
        src="/static/img/illustrations/search.png"
        alt="Search illustration"
      />
      <Callout type="note" title={title} text={text} />
    </NoResultsStyled>
  );
};

export default NoResults;
