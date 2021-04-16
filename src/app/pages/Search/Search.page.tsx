import React, { useEffect, useState } from 'react';
import SearchContainer from '~/components/search';
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

const SearchPage = () => {
  const [featuredProductOptions, setFeaturedProductOptions] = useState<any>();
  useEffect(() => {
    setFeaturedProductOptions({
      id: 'featuredProduct',
      mapper: mapEntriesToResults,
    });
  }, []);
  const { results: featuredProducts } = useMinilist(featuredProductOptions);
  return <SearchContainer featuredProducts={featuredProducts} />;
};

export default SearchPage;
