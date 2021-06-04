import { useEffect, useState } from 'react';
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '../transformations/entry-to-card-props.mapper';

const useExploreMore = (hasResults: boolean) => {
  const [exploreMoreOptions, setExploreMoreOptions] = useState<any>();

  useEffect(() => {
    if (!hasResults)
      setExploreMoreOptions({
        id: 'exploreMore',
        mapper: mapEntriesToResults,
      });
  }, [hasResults]);

  const { results: exploreMore } = useMinilist(exploreMoreOptions);

  return exploreMore;
};

export default useExploreMore;
