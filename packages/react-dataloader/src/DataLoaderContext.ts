import { createContext } from 'react';

import type {
  DataItemType,
} from './types';

export const DataLoaderContext = createContext<Record<string, DataItemType<any>>>({});
