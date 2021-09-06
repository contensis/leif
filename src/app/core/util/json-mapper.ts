import { EntryMapper } from '@zengenti/contensis-react-base';
import mapJson from 'jsonpath-mapper';
export {
  mapComposer,
  mapEntries,
  useMapper,
  useComposerMapper,
  useEntriesMapper,
} from '@zengenti/contensis-react-base/util';

export const entryMapper =
  (mapping: any): EntryMapper =>
  (node, state) =>
    mapJson({ ...node, ...node.entry, state }, mapping);

export default mapJson;
