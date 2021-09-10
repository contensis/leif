import { useState, useEffect } from 'react';
import { Op, Query } from 'contensis-delivery-api';
import { cachedSearch } from '~/core/util/ContensisDeliveryApi';

const getProducts = async (filter: string) => {
  const query = new Query(
    Op.and(
      Op.equalTo('sys.versionStatus', 'published'),
      Op.or(
        Op.equalTo('sys.contentTypeId', 'pot'),
        Op.equalTo('sys.contentTypeId', 'plant')
      )
    ),
    Op.equalTo('type.entryTitle', filter)
  );
  query.pageSize = 10;
  try {
    return await cachedSearch.search(query, 1);
  } catch (error) {
    throw new Error(error);
  }
};

export const useDeliveryApiToGetProducts = (filter: string) => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const payload = await getProducts(filter);
      const { items } = payload || {};
      if (items && items.length >= 1) setProducts(items);
    }
    if (!products || products.length < 1) {
      fetchProducts();
    }
  }, [filter, products]);
  return products;
};
