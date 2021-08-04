/**
 * @see https://react-query.tanstack.com/guides/window-focus-refetching
 * @see https://react-query.tanstack.com/guides/query-retries#_top
 */
export const reactQueryGlobalConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};
