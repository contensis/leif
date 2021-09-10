import React, { ReactElement, useEffect, useState } from 'react';

// Hooks
import { useDeliveryApiToGetEntries } from '~/utils/hooks/useDeliveryApi';
import { saveLocalState } from '~/utils/localStorage';

// Components
import MockEntryWrapper from './MockDataWrapper';

interface Props {
  contentTypes: string[];
  pageSize?: number;
  mapper: any;
  children: ReactElement<any, any>;
  selectedEntry?: string;
}

const MockDataLoader = ({
  mapper,
  contentTypes,
  pageSize,
  children,
  selectedEntry,
}: Props) => {
  const entries = useDeliveryApiToGetEntries(contentTypes, pageSize);
  const entriesArray: string[] = [];
  const [entryId, setEntryId] = useState('');

  if (entries && entries.length >= 1) {
    entries.map((entry: any) => {
      const { entryTitle } = entry || {};
      if (entryTitle) entriesArray.push(entryTitle);
    });
  }

  useEffect(() => {
    entries.filter(entry => {
      if (entry.entryTitle === selectedEntry) {
        setEntryId(entry.sys.id);
      }
    });
  }, [selectedEntry, entries]);

  useEffect(() => {
    const entriesArrayStringified = JSON.stringify(entriesArray);
    saveLocalState('entries', entriesArrayStringified);
  }, [entriesArray]);

  return (
    <MockEntryWrapper entryId={entryId} mapper={mapper}>
      {children}
    </MockEntryWrapper>
  );
};

export default MockDataLoader;
