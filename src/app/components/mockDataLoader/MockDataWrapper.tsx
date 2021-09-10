import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';

// Hooks
import { useDeliveryApiToGetEntry } from '~/utils/hooks/useDeliveryApi';

interface Props {
  entryId: string;
  mapper?: any;
  children: ReactElement<any, any>;
}
const MockEntryWrapper = ({ entryId, mapper, children }: Props) => {
  const [entry, setEntry] = useState({});
  const data = useDeliveryApiToGetEntry(entryId);

  useEffect(() => {
    if (data) {
      if (mapper) {
        const mappedEntry = mapper([data]);
        setEntry(mappedEntry[0]);
      } else setEntry(data);
    }
  }, [data]);

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, {
      ...entry,
    })
  );

  return <>{childrenWithProps}</>;
};

export default MockEntryWrapper;
