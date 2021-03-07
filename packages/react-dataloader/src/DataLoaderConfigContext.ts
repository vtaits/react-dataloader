import { createContext } from 'react';
import { useAsync } from 'react-async-hook';

import type {
  ConfigType,
  DataItemType,
} from './types';

export const useLoadData = <Response>(
  loadData: () => Response | Promise<Response>,
  deps?: any[],
): DataItemType<Response> => {
  const {
    status,
    result,
    loading,
    error,
    execute,
  } = useAsync(
    // https://github.com/slorber/react-async-hook/pull/53
    loadData as () => Promise<Response>,
    deps,
  );

  return {
    status,
    result,
    loading,
    error,
    reload: execute,
  };
};

export const defaultConfig: ConfigType = {
  useLoadData,
};

export const DataLoaderConfigContext = createContext<ConfigType>(defaultConfig);
