import type { AppProps } from 'next/app';
import { ThemeProvider, Global } from '@emotion/react';
import { globalStyles } from 'styles/globals';
import { CommonLayout } from 'components/Layout';
import { theme } from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { reactQueryGlobalConfig } from 'core/config/reactQuery.config';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const queryClient = new QueryClient(reactQueryGlobalConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default MyApp;
