import { storiesOf } from '@storybook/react';
import type {
  FC,
} from 'react';
import sleep from 'sleep-promise';

import {
  DataLoader,
  useSingleData,
} from '@vtaits/react-dataloader';

type TestType = {
  message: string;
}

export const ChildComponent: FC = () => {
  const {
    loading,
    result,
  } = useSingleData<TestType>('test');

  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  if (result) {
    return (
      <p>
        {result.message}
      </p>
    );
  }

  return null;
};

export const Simple: FC = () => (
  <DataLoader
    dataKeys={['test']}
    loadData={async () => {
      await sleep(2000);

      return {
        test: {
          message: 'Hello',
        } as TestType,
      };
    }}
  >
    <ChildComponent />
  </DataLoader>
);

storiesOf('@vtaits/react-dataloader', module)
  .add('Simple', () => <Simple />);
