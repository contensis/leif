import { useEffect, useState } from 'react';
import { Op, Query, Client } from 'contensis-delivery-api';

/* global DELIVERY_API_CONFIG */
export const client = Client.create(DELIVERY_API_CONFIG);

const getEntries = async (contentTypes: string[], pageSize: number) => {
  const query = new Query(
    Op.equalTo('sys.contentTypeId', [...contentTypes]),
    Op.equalTo('sys.versionStatus', 'latest')
  );
  query.fields = ['entryTitle', 'sys.id'];
  query.pageSize = pageSize;
  try {
    return await client.entries.search(query, 1);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getEntryById = async (entryId: string) => {
  try {
    const entry = await client.entries.get(entryId);
    return entry;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const useDeliveryApiToGetEntry = (entryId: string) => {
  const [entry, setEntry] = useState<any>();
  useEffect(() => {
    const fetchEntry = async () => {
      const entryData = await getEntryById(entryId);
      if (entryData) setEntry(entryData);
    };
    if (entryId) fetchEntry();
  }, [entryId]);
  return entry;
};

export const useDeliveryApiToGetEntries = (
  contentTypes: string[],
  pageSize = 10
) => {
  const [entries, setEntries] = useState<any[]>([]);
  useEffect(() => {
    const fetchEntries = async () => {
      const payload = await getEntries(contentTypes, pageSize);
      const { items } = payload || {};
      if (items && items.length >= 1) setEntries(items);
    };
    if (!entries || entries.length <= 0) fetchEntries();
  }, []);
  return entries;
};
