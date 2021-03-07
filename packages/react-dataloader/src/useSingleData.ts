import { useData } from './useData';

import type {
  DataItemType,
} from './types';

export function useSingleData<SingleResponse>(key: string): DataItemType<SingleResponse> {
  const data = useData<Record<string, SingleResponse>>();

  return data[key];
}
