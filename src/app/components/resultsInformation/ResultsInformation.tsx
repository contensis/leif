import React from 'react';

interface Props {
  className?: string;
  facetName: string;
  resultsText: string;
  searchTerm: string;
  wholeSearchTotal: number;
  whyNotTryText: string;
}

const ResultsInformation = ({
  className,
  facetName,
  resultsText,
  searchTerm,
  wholeSearchTotal,
}: Props) => {
  return (
    <p className={className}>
      {resultsText}
      {searchTerm && (
        <>
          {`for the search term `}
          <span>{searchTerm}</span>
        </>
      )}
      {wholeSearchTotal > 0 && (
        <>
          {' in '}
          <span>{facetName}</span>
        </>
      )}
      {`.`}
    </p>
  );
};

export default ResultsInformation;
