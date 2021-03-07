import type {
  FC,
  ReactNode,
} from 'react';

import {
  DataLoaderConfigContext,
  defaultConfig,
} from './DataLoaderConfigContext';
import type {
  ConfigType,
} from './types';

type DataLoaderConfigProps =
  & Partial<ConfigType>
  & {
    children?: ReactNode;
  };

export const DataLoaderConfig: FC<DataLoaderConfigProps> = ({
  children,
  ...rest
}) => (
  <DataLoaderConfigContext.Provider
    value={{
      ...defaultConfig,
      ...rest,
    }}
  >
    {children}
  </DataLoaderConfigContext.Provider>
);
