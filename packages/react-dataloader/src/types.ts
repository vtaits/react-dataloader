import type {
  AsyncState,
} from 'react-async-hook';

export type DataItemType<SingleResponse> =
  & AsyncState<SingleResponse>
  & {
    reload: () => void;
  };

export type ConfigType = {
  useLoadData: <Response>(
    loadData: () => Response | Promise<Response>,
    deps?: any[],
  ) => DataItemType<Response>;
};
