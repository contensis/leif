import React, { useEffect, useState } from 'react';
import SearchContainer from '~/components/search';
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

const SearchPage = () => {
  const [exploreMoreOptions, setExploreMoreOptions] = useState<any>();
  useEffect(() => {
    setExploreMoreOptions({
      id: 'exploreMore',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: exploreMore } = useMinilist(exploreMoreOptions);

  return <SearchContainer exploreMore={exploreMore} />;
};

export default SearchPage;
