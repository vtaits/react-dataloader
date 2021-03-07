import {
  useContext,
  useMemo,
} from 'react';
import type {
  ReactElement,
  ReactNode,
} from 'react';

import { DataLoaderConfigContext } from './DataLoaderConfigContext';
import { DataLoaderContext } from './DataLoaderContext';

import type {
  DataItemType,
} from './types';

export type DataLoaderProps<
Response,
DataKey extends keyof Response,
> = {
  dataKeys: DataKey[];
  loadData: () => Response | Promise<Response>;
  deps?: any[];
  children?: ReactNode;
};

export function DataLoader<
Response,
DataKey extends keyof Response,
>({
  dataKeys,
  loadData,
  deps,
  children,
}: DataLoaderProps<Response, DataKey>): ReactElement {
  const {
    useLoadData,
  } = useContext(DataLoaderConfigContext);
  const parentValue = useContext(DataLoaderContext);

  const {
    status,
    result,
    loading,
    error,
    reload,
  } = useLoadData(
    loadData,
    deps,
  );

  const collectedValue = useMemo(
    () => dataKeys.reduce<Record<string, DataItemType<any>>>((res, dataKey) => {
      res[dataKey as string] = {
        status,
        result: result ? result[dataKey] : undefined,
        loading,
        error,
        reload,
      };

      return res;
    }, {
      ...parentValue,
    }),
    
    [
      dataKeys,
      parentValue,
      result,
      loading,
      error,
      reload,
    ],
  );

  return (
    <DataLoaderContext.Provider
      value={collectedValue}
    >
      {children}
    </DataLoaderContext.Provider>
  );
}

DataLoader.defaultProps = {
  deps: [],
  children: null,
};
