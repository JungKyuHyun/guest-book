import { useRouter } from 'next/dist/client/router';

export function useUrlQuery<T = unknown>(): Partial<T> {
  const { query } = useRouter();

  return query as unknown as T;
}
