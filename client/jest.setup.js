import { setLogger } from 'react-query';

// @see https://react-query.tanstack.com/guides/testing#turn-off-network-error-logging
setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});