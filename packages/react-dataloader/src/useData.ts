import { useContext } from 'react';

import { DataLoaderContext } from './DataLoaderContext';

import type {
  DataItemType,
} from './types';

export function useData<Response>(): {
  [key in keyof Response]: DataItemType<Response[key]>;
} {
  const data = useContext(DataLoaderContext);

  return data as {
    [key in keyof Response]: DataItemType<Response[key]>;
  };
}
