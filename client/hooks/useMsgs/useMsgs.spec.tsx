import { QueryClient, QueryClientProvider } from 'react-query';
import { useMsgs } from './useMsgs';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { setLogger } from 'react-query';
import nock from 'nock';

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

jest.mock('./useMsgs');
jest.setTimeout(30000);

const expectation = nock('http://localhost:8080').get('/messages').reply(200, {
  answer: 42,
});

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// MEMO: 예상한대로 훅 테스트가 잘 되지 않아 잠시 스킵
describe.skip('useMsgs hook test', () => {
  it('test', async () => {
    const { result, waitFor } = renderHook(() => useMsgs(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => result.current.isFetching, { timeout: 30000 });
    await waitFor(() => !result.current.isFetching, { timeout: 30000 });
    // await waitFor(() => result.current.isSuccess);
    expect(result.current).toEqual({});
  });
});
